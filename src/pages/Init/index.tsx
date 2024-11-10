import { Button, message, Modal } from "antd"
import { startTransition, } from "react";
import { CarryOutOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
import { removeToken } from "@/utils";
import './index.scss'
import { useTranslation } from "react-i18next";
const Init = () => {

  const { t } = useTranslation();
  const username = localStorage.getItem("username");

  const navigate = useNavigate();


  const toHome = () => {
    if (username !== null) {
      // 使用 startTransition 包裹 navigate，优化导航行为
      startTransition(() => {
        navigate('/app/select/train');
      });
    } else {
      message.error("You are not logged in yet, please log in first!")
    }
  }

  const loginOrRegister = (route) => {
    startTransition(() => {
      navigate(route)
    })
  }

  const toPersonal = () => {
    startTransition(() => {
      navigate('/app/personal')
    })
  }


  const confirmLogout = () => {
    Modal.confirm({
      title: t('Confirm exit'),
      content: 'Are you sure you want to log out?',
      onOk() {
        message.success('Log out successfully!');
        removeToken();
        localStorage.clear()
        navigate('/login');
      },
      onCancel() {
        console.log('Cancel logout');
      },
    });
  };

  return (
    <div className="init">
      <div className="header">
        <div className="loginBox">
          {username === null ?
            <div>
              <Button type='dashed' onClick={() => loginOrRegister("/register")}>Sign up</Button>
              <Button type="primary" onClick={() => loginOrRegister("/login")}>Sign in</Button>
            </div>
            :
            <div>
              <Button onClick={confirmLogout}>Sign out</Button>
              <Button type="primary" onClick={toPersonal}>Personal center</Button>
            </div>
          }
        </div>
        <div className="title">
          AutoGP
        </div>
        <div className="content">
          AutoGP provides a powerful genetic prediction phenotype tool for your crops.
          Simply provide the genome and phenotype of the material, and we will automate model training and phenotypic prediction,
          providing you with highly accurate results for personalized genetic analysis and phenotypic prediction.
        </div>
        <div className="begin">
          <Button
            type="primary"
            style={{ fontWeight: "bold" }}
            onClick={toHome}
          >
            Begin &nbsp;&nbsp;-&gt;
          </Button>
        </div>
        <div className="img">
          <div className="imgBox img1">
            <img onClick={() => { navigate('/app/pretreatment/phenotype_extraction') }} src="/assets/imgs/home/home1.jpg" alt="" />
            <div className="label">Data Preprocessing</div>
          </div>
          <div className="imgBox img2">
            <img onClick={() => { navigate('/app/analysis/phenotype') }} src="/assets/imgs/home/home2.jpg" alt="" />
            <div className="label">Data Analysis</div>
          </div>
          <div className="imgBox img3">
            <img onClick={() => { navigate('/app/select/train') }} src="/assets/imgs/home/home3.jpg" alt="" />
            <div className="label">Genomic Selection</div>
          </div>
        </div>
      </div>
      <div className="main_fun">
      </div>
      <div className="corn_container">

        <div className="corn">
          <div className="middle">
            <div className="left">
              <img src="/assets/imgs/home/corn_platform.jpg" alt="" />
            </div>
            <div className="right">
              <div className="title">{t("Corn Intelligent Data Management Platform")}</div>
              <div className="item">
                &nbsp;<CarryOutOutlined /> &nbsp;
                Presents the name of each maize material, genotype data, video of seedlings and maturity, point cloud data, up to three phenotypic data, and environmental data related to the growing environment.
              </div>
              <div className="item">
                &nbsp;<CarryOutOutlined /> &nbsp;
                Different data sources can be selected according to research needs. Each source will present different content and data.
              </div>
              <div className="item">
                &nbsp;<CarryOutOutlined /> &nbsp;
                Export the selected data in batches, including VCF files of genotypes and CSV files of phenotypes, to facilitate subsequent data analysis and sharing.
              </div>
            </div>
          </div>
          <Button className="corn_button" onClick={() => { window.open('/corn_intelligent_management_platform', '_black') }}>View details</Button>
        </div>
      </div>
      <div className="help">
        <div className="pdf">
          <a href="/pdfs/AutoGP帮助文档.pdf" target="_blank" rel="noopener noreferrer">
            中文帮助文档
          </a>
          <a href="/pdfs/AutoGP help documentation.pdf" target="_blank" rel="noopener noreferrer">
            English help document
          </a>
        </div>
      </div>
      <div className="footer">
        <div className="footer_box quick_access">
          <div className="title fast">Quick Access</div>
          <div className="item fast" onClick={() => { window.open('/app/pretreatment/phenotype_extraction', '_blank'); }}>Phenotype extraction</div>
          <div className="item fast" onClick={() => { window.open('/app/select/train', '_black') }}>Model training</div>
          <div className="item fast" onClick={() => { window.open('/app/select/predict', '_black') }}>Phenotypic prediction</div>
        </div>
        <div className="footer_box about">
          <div className="title">About us</div>
          <div className="item">
            <a target="_blank" href="https://www.hzau.edu.cn/">Huazhong Agricultural University</a>
          </div>
          <div className="title">Email</div>
          <div className="item">AutoGP_HZAU@163.com</div>
        </div>
        <div className="footer_box address">
          <div className="title">Address</div>
          <div className="item">
            <a target="_blank" href="https://www.hzau.edu.cn/">Huazhong Agricultural University, Shizishan Street, Hongshan District, Wuhan City, Hubei Province</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Init