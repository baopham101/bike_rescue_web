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
                                    <h5 className="mb-0 font-16 font-medium">Hanna Gover</h5>
                                    <span>hgover@gmail.com</span></div>
                            </div>
                        </td>
                        <td>Elite Admin</td>

                        <td>
                            <h5>Đang hoạt động</h5>
                        </td>
                        <td>
                            <Button>Xem</Button>
                            <Button>Xem</Button>
                            <Button>Xem</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex no-block align-items-center">
                                <div className="mr-2"><img src={img2} alt="user" className="rounded-circle" width="45"/>
                                </div>
                                <div className="">
                                    <h5 className="mb-0 font-16 font-medium">Daniel Kristeen</h5>
                                    <span>Kristeen@gmail.com</span></div>
                            </div>
                        </td>
                        <td>Elite Admin</td>

                        <td>
                            <h5>Đang hoạt động</h5>
                        </td>
                        <td>
                            <Button>Xem</Button>
                            <Button>Xem</Button>
                            <Button>Xem</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex no-block align-items-center">
                                <div className="mr-2"><img src={img3} alt="user" className="rounded-circle" width="45"/>
                                </div>
                                <div className="">
                                    <h5 className="mb-0 font-16 font-medium">Julian Josephs</h5>
                                    <span>Josephs@gmail.com</span></div>
                            </div>
                        </td>
                        <td>Elite Admin</td>

                        <td>
                            <h5>Đang hoạt động</h5>
                        </td>
                        <td>
                            <Button>Xem</Button>
                            <Button>Xem</Button>
                            <Button>Xem</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex no-block align-items-center">
                                <div className="mr-2"><img src={img4} alt="user" className="rounded-circle" width="45"/>
                                </div>
                                <div className="">
                                    <h5 className="mb-0 font-16 font-medium">Jan Petrovic</h5>
                                    <span>hgover@gmail.com</span></div>
                            </div>
                        </td>
                        <td>Elite Admin</td>

                        <td>
                            <h5>Đang hoạt động</h5>
                        </td>
                        <td>
                            <Button>Xem</Button>
                            <Button>Xem</Button>
                            <Button>Xem</Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
}

export default User;
