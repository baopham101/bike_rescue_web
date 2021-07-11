import React from "react";

import img1 from 'assets/images/users/1.jpg';
import img2 from 'assets/images/users/2.jpg';
import img3 from 'assets/images/users/3.jpg';
import img4 from 'assets/images/users/4.jpg';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table, Button
} from 'reactstrap';

const Projects = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/


        
        <Card>
            <CardBody>
                
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                    <tr className="border-0">
                        <th className="border-0">Thông tin cửa hàng</th>
                        <th className="border-0">Các loại cứu hộ</th>
                        <th className="border-0">Số điện thoại</th>
                        <th className="border-0">Trạng thái</th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td>
                            <div className="d-flex no-block align-items-center">
                                <div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45"/>
                                </div>
                                <div className="">
                                    <h5 className="mb-0 font-16 font-medium">Thành tài Auto</h5>
                                    <span>97 Ngõ 5, Âu Cơ, Hà Nội</span></div>
                            </div>
                        </td>
                        <td>
                            <span style={{marginRight: '1em'}}  class="badge badge-secondary">Bể bánh</span>
                            <span style={{marginRight: '1em'}}  class="badge badge-secondary">Hư máy</span>
                            <span style={{marginRight: '1em'}}  class="badge badge-secondary">Hết xăng</span>
                        </td>
                        <td>090535221</td>

                        <td>
                            <h5 className="text-success" >Đang hoạt động</h5>
                        </td>
                        <td>
                            <Button style={{marginRight: '1em'}} className="btn btn-outline-primary">Cập Nhật</Button>
                            <Button style={{marginRight: '1em'}} className="btn btn-outline-danger">Xem Báo Cáo</Button>
                            <span className="text-warning">hiện có 3 lần báo cáo</span>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <div className="d-flex no-block align-items-center">
                                <div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45"/>
                                </div>
                                <div className="">
                                    <h5 className="mb-0 font-16 font-medium">Thành tài Auto</h5>
                                    <span>13 Phố Thị Khai, Quận 3, TP.HCM</span></div>
                            </div>
                        </td>
                        <td>
                            <span style={{marginRight: '1em'}}  class="badge badge-secondary">Bể bánh</span>
                            <span style={{marginRight: '1em'}}  class="badge badge-secondary">Hư máy</span>
                            <span style={{marginRight: '1em'}}  class="badge badge-secondary">Hết xăng</span>

                        </td>
                        <td>090535221</td>

                        <td>
                            <h5 className="text-success" >Đang hoạt động</h5>
                        </td>
                        <td>
                            <Button style={{marginRight: '1em'}} className="btn btn-outline-primary">Cập Nhật</Button>
                            <Button style={{marginRight: '1em'}} className="btn btn-outline-danger">Xem Báo Cáo</Button>
                            <span className="text-warning">hiện có 3 lần báo cáo</span>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <div className="d-flex no-block align-items-center">
                                <div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45"/>
                                </div>
                                <div className="">
                                    <h5 className="mb-0 font-16 font-medium">Thành tài Auto</h5>
                                    <span>97 Ngõ 5, Âu Cơ, Hà Nội</span></div>
                            </div>
                        </td>
                        <td>
                            <span style={{marginRight: '1em'}}  class="badge badge-secondary">Bể bánh</span>
                            <span style={{marginRight: '1em'}}  class="badge badge-secondary">Hư máy</span>
                            <span style={{marginRight: '1em'}}  class="badge badge-secondary">Hết xăng</span>
                        </td>
                        <td>090535221</td>

                        <td>
                            <h5 className="text-success" >Đang hoạt động</h5>
                        </td>
                        <td>
                            <Button style={{marginRight: '1em'}} className="btn btn-outline-primary">Cập Nhật</Button>
                            <Button style={{marginRight: '1em'}} className="btn btn-outline-danger">Xem Báo Cáo</Button>
                            <span className="text-warning">hiện có 3 lần báo cáo</span>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <div className="d-flex no-block align-items-center">
                                <div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45"/>
                                </div>
                                <div className="">
                                    <h5 className="mb-0 font-16 font-medium">Thành tài Auto</h5>
                                    <span>97 Ngõ 5, Âu Cơ, Hà Nội</span></div>
                            </div>
                        </td>
                        <td>
                            <span style={{marginRight: '1em'}}  class="badge badge-secondary">Bể bánh</span>
                            <span style={{marginRight: '1em'}}  class="badge badge-secondary">Hư máy</span>
                            <span style={{marginRight: '1em'}}  class="badge badge-secondary">Hết xăng</span>
                        </td>
                        <td>090535221</td>

                        <td>
                            <h5 className="text-success" >Đang hoạt động</h5>
                        </td>
                        <td>
                            <Button style={{marginRight: '1em'}} className="btn btn-outline-primary">Cập Nhật</Button>
                            <Button style={{marginRight: '1em'}} className="btn btn-outline-danger">Xem Báo Cáo</Button>
                            <span className="text-warning">hiện có 3 lần báo cáo</span>
                        </td>
                    </tr>
                    
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
}

export default Projects;
