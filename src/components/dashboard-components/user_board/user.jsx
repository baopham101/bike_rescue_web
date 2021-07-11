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

const User = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/

        <Card>
            <CardBody>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                    <tr className="border-0">
                        <th className="border-0">Thông tin</th>
                        <th className="border-0">Hãng xe</th>
                        <th className="border-0">Số Điện Thoại</th>
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
                                    <h5 className="mb-0 font-16 font-medium">Nguyễn Trọng T</h5>
                                    <span>taitt1@gmail.com</span></div>
                            </div>
                        </td>
                        <td>Yamaha Acruzo</td>
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
                                    <h5 className="mb-0 font-16 font-medium">Nguyễn Thành A</h5>
                                    <span>thanht32@gmail.com</span></div>
                            </div>
                        </td>
                        <td>Honda Dream</td>
                        <td>090535621</td>

                        <td>
                            <h5 className="text-success" >Đang hoạt động</h5>
                        </td>
                        <td>
                            <Button style={{marginRight: '1em'}} className="btn btn-outline-primary">Cập Nhật</Button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="d-flex no-block align-items-center">
                                <div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45"/>
                                </div>
                                <div className="">
                                    <h5 className="mb-0 font-16 font-medium">Phan Bá D</h5>
                                    <span>phanhg1@gmail.com</span></div>
                            </div>
                        </td>
                        <td>Piaggo Vespa</td>
                        <td>0925135221</td>

                        <td>
                            <h5 className="text-success" >Đang hoạt động</h5>
                        </td>
                        <td>
                            <Button style={{marginRight: '1em'}} className="btn btn-outline-primary">Cập Nhật</Button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="d-flex no-block align-items-center">
                                <div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45"/>
                                </div>
                                <div className="">
                                    <h5 className="mb-0 font-16 font-medium">Thành Thị V</h5>
                                    <span>ta22vv@gmail.com</span></div>
                            </div>
                        </td>
                        <td>Yamaha RX0</td>
                        <td>090855221</td>

                        <td>
                            <h5 className="text-warning" >Đã khóa tài khoản</h5>
                        </td>
                        <td>
                            <Button style={{marginRight: '1em'}} className="btn btn-outline-warning">Mở khóa tài khoản</Button>
                            <Button style={{marginRight: '1em'}} className="btn btn-outline-danger">Xem Báo Cáo</Button>
                            <span className="text-warning">đã có 3 lần báo cáo</span>
                        </td>
                    </tr>
                   
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
}

export default User;
