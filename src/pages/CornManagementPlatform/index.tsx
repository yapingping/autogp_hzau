import React, { useState } from 'react';
import { Space, Table } from 'antd';
import { Button, Modal, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


import './index.scss'
import { useTranslation } from 'react-i18next';
import { getToken } from '@/utils';
// import { useNavigate } from 'react-router-dom';
const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  name: string,
  seedVideo: string,
  seedPly: string,
  matureVideo: string,
  maturePly: string,
  first: string;
  second: string;
  third: string;
  environmentData: string,
}  


const data = [
  {
    key: '1',
    name: "HB001",
    seedVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_2_2024_08_30_09_15_37/data_2.mp4',
    seedPly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_1_2024_08_30_09_14_56/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    matureVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_6_2024_08_30_09_16_53/data_6.mp4',
    maturePly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_6_2024_08_30_09_16_53/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    first: '56',
    second: '56',
    third: '56',
    environmentData: '详情',
  },
  {
    key: '2',
    name: "HB002",
    seedVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_7_2024_08_30_11_04_08/data_7.mp4',
    seedPly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    matureVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/data_8.mp4',
    maturePly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_11_2024_08_30_11_05_57/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    first: '56',
    second: '56',
    third: '56',
    environmentData: '详情',
  },
  {
    key: '3',
    name: "HB002",
    seedVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_7_2024_08_30_11_04_08/data_7.mp4',
    seedPly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    matureVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/data_8.mp4',
    maturePly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_11_2024_08_30_11_05_57/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    first: '56',
    second: '56',
    third: '56',
    environmentData: '详情',
  },
  {
    key: '4',
    name: "HB002",
    seedVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_7_2024_08_30_11_04_08/data_7.mp4',
    seedPly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    matureVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/data_8.mp4',
    maturePly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_11_2024_08_30_11_05_57/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    first: '56',
    second: '56',
    third: '56',
    environmentData: '详情',
  },
  {
    key: '5',
    name: "HB002",
    seedVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_7_2024_08_30_11_04_08/data_7.mp4',
    seedPly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    matureVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/data_8.mp4',
    maturePly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_11_2024_08_30_11_05_57/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    first: '56',
    second: '56',
    third: '56',
    environmentData: '详情',
  },
  {
    key: '6',
    name: "HB002",
    seedVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_7_2024_08_30_11_04_08/data_7.mp4',
    seedPly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    matureVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/data_8.mp4',
    maturePly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_11_2024_08_30_11_05_57/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    first: '56',
    second: '56',
    third: '56',
    environmentData: '详情',
  },
  {
    key: '7',
    name: "HB002",
    seedVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_7_2024_08_30_11_04_08/data_7.mp4',
    seedPly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    matureVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/data_8.mp4',
    maturePly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_11_2024_08_30_11_05_57/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    first: '56',
    second: '56',
    third: '56',
    environmentData: '详情',
  },
  {
    key: '7',
    name: "HB002",
    seedVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_7_2024_08_30_11_04_08/data_7.mp4',
    seedPly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    matureVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/data_8.mp4',
    maturePly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_11_2024_08_30_11_05_57/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    first: '56',
    second: '56',
    third: '56',
    environmentData: '详情',
  },
  {
    key: '7',
    name: "HB002",
    seedVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_7_2024_08_30_11_04_08/data_7.mp4',
    seedPly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    matureVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/data_8.mp4',
    maturePly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_11_2024_08_30_11_05_57/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    first: '56',
    second: '56',
    third: '56',
    environmentData: '详情',
  },
  {
    key: '7',
    name: "HB002",
    seedVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_7_2024_08_30_11_04_08/data_7.mp4',
    seedPly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    matureVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/data_8.mp4',
    maturePly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_11_2024_08_30_11_05_57/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    first: '56',
    second: '56',
    third: '56',
    environmentData: '详情',
  },
  {
    key: '7',
    name: "HB002",
    seedVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_7_2024_08_30_11_04_08/data_7.mp4',
    seedPly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    matureVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/data_8.mp4',
    maturePly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_11_2024_08_30_11_05_57/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    first: '56',
    second: '56',
    third: '56',
    environmentData: '详情',
  },
  {
    key: '7',
    name: "HB002",
    seedVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_7_2024_08_30_11_04_08/data_7.mp4',
    seedPly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    matureVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/data_8.mp4',
    maturePly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_11_2024_08_30_11_05_57/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    first: '56',
    second: '56',
    third: '56',
    environmentData: '详情',
  },
  {
    key: '7',
    name: "HB002",
    seedVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_7_2024_08_30_11_04_08/data_7.mp4',
    seedPly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    matureVideo: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_8_2024_08_30_11_04_35/data_8.mp4',
    maturePly: '/datashare/dir_wuhaotest/code/3D_corn/data_demo/HB_11_2024_08_30_11_05_57/point_cloud/iteration_10000/point_cloud_xyz_fin.ply',
    first: '56',
    second: '56',
    third: '56',
    environmentData: '详情',
  },
];


const findVideoDetail = (path) => {
  console.log(path)
}


const findEnvDataDetail = (path) => {
  console.log(path)
}

const CornManagementPlatform = () => {

  const { t } = useTranslation();
  // const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const showVideoModal = (path) => {
    findVideoDetail(path)
    loadVideo(path)
    setIsVideoModalOpen(true);
  };

  const handleOk = () => {
    setVideoUrl(null)
    setIsVideoModalOpen(false);
  };
  const [videoUrl, setVideoUrl] = useState(null)
  const loadVideo = async (videoPath) => {
    try {
      const response = await fetch(`http://218.199.69.63:39600/corn/download?filePath=${videoPath}`, {
        method: 'GET',
        headers: {
          token: getToken(),
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setVideoUrl(url);

    } catch (error) {
      console.error(error)
    }
  };
  const [isEnvModalOpen, setIsEnvModalOpen] = useState(false);
  const showEnvModal = (path) => {
    findEnvDataDetail(path)
    setIsEnvModalOpen(true);
  };

  const handleEnvOk = () => {
    setIsEnvModalOpen(false);
  };
  const findPlyDetail = async(plypath) => {
    // navigate(`/cimp/ply_detail?url=${plypath}`)
    console.log(plypath)
  }
  return (
    <div className="corn_platform">
      <div className="corn_top">
        <div className="title">
          {t("玉米智能数据管理平台")}
        </div>
      </div>
      <Modal
        title={<p>视频数据</p>}
        open={isVideoModalOpen}
        onCancel={handleOk}
        footer={[
          <Button key="ok" type="primary" onClick={handleOk}>
            确定
          </Button>,
        ]}
      >
        {videoUrl ? <video
          style={{ width: "300px" }}
          src={videoUrl}
          controls
        ></video>
          :

          <div>
            <Spin indicator={<LoadingOutlined spin />} size="large" />
          </div>}
      </Modal>
      <Modal
        title={<p>环境数据详情</p>}
        open={isEnvModalOpen}
        onCancel={handleEnvOk}
        footer={[
          <Button key="ok" type="primary" onClick={handleEnvOk}>
            确定
          </Button>,
        ]}
      >
        <p>...</p>
        <p>...</p>
      </Modal>
      <div className="corn_table">
        <Table<DataType>
          dataSource={data}
          pagination={{ pageSize: 15 }}
        >
          <Column title="作物名" dataIndex="name" key="name" />
          <ColumnGroup title="幼苗期">
            <Column
              title="视频数据"
              dataIndex="seedVideo"
              key="seedVideo"
              render={(_: any, record: DataType) => (
                <Space size="middle">
                  <a onClick={() => showVideoModal(record.seedVideo)} href="javascript:;">详情</a>
                </Space>
              )}
            />
            <Column
              title="点云数据"
              dataIndex="seedPly"
              key="seedPly"
              render={(_: any, record: DataType) => (
                <Space size="middle">
                  <a onClick={() => findPlyDetail(record.seedPly)} href="javascript:;">详情</a>
                </Space>
              )} />
          </ColumnGroup>
          <ColumnGroup title="成熟期">
            <Column
              title="视频数据"
              dataIndex="matureVideo"
              key="matureVideo"
              render={(_: any, record: DataType) => (
                <Space size="middle">
                  <a onClick={() => showVideoModal(record.matureVideo)} href="javascript:;">详情</a>
                </Space>
              )}
            />
            <Column
              title="点云数据"
              dataIndex="maturePly"
              key="maturePly"
              render={(_: any, record: DataType) => (
                <Space size="middle">
                  <a onClick={() => findPlyDetail(record.maturePly)} href="javascript:;">详情</a>
                </Space>
              )}
            />
          </ColumnGroup>
          <ColumnGroup title="表型数据">
            <Column title="1" dataIndex="first" key="first" />
            <Column title="2" dataIndex="second" key="second" />
            <Column title="3" dataIndex="third" key="third" />
          </ColumnGroup>
          <Column
            title="环境数据"
            dataIndex="environmentData"
            key="environmentData"
            render={(_: any, record: DataType) => (
              <Space size="middle">
                <a onClick={() => showEnvModal(record.environmentData)} href="javascript:;">详情</a>
              </Space>
            )}
          />
        </Table>
      </div>
    </div>
  )
}
export default CornManagementPlatform;