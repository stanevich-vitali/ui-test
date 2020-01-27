import React, { FC } from "react";
import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { RootState } from "./rootReducer";
import { Cart } from "../features/cart/Cart";
import { HttpInterceptor } from "../components/HttpInterceptor";
import "./App.scss";
export interface AppProps {
    view: string;
    scu: string;
    theme: string;
    lang: string;
    scus: string[];
}

export const App: FC<AppProps> = (props: AppProps) => {
    const i18n: any = useSelector((state: RootState) => state.i18n);
    return (
        <div className="App">
            <HttpInterceptor></HttpInterceptor>
            <h5>Widget Params:</h5>
            <ul>
                <li>SCU: {props.scu}</li>
                <li>View: {props.view}</li>
                <li>Theme: {props.theme}</li>
                <li>Lang: {props.theme}</li>
                <li>
                    Page SCUs:
                    <ul>
                        {props.scus.map((scu, index) => (
                            <li key={index}>{scu}</li>
                        ))}
                    </ul>
                </li>
            </ul>
            <Tabs defaultActiveKey="product" id="uncontrolled-tab-example">
                <Tab eventKey="all_products" title="All Products">
                    <ListGroup>
                        <ListGroup.Item>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Product #1</Card.Title>
                                    <Card.Text>
                                        Product #1 Description
                                    </Card.Text>
                                    <Button variant="primary">Buy</Button>
                                </Card.Body>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Product #2</Card.Title>
                                    <Card.Text>
                                        Product #2 Description
                                    </Card.Text>
                                    <Button variant="primary">Buy</Button>
                                </Card.Body>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Product #3</Card.Title>
                                    <Card.Text>
                                        Product #3 Description
                                    </Card.Text>
                                    <Button variant="primary">Buy</Button>
                                </Card.Body>
                            </Card>
                        </ListGroup.Item>
                    </ListGroup>
                </Tab>
                <Tab
                    eventKey="product"
                    title={i18n.PRODUCT_DETAILS_TAB.TAB_NAME}
                >
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16f9e789278%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16f9e789278%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9140625%22%20y%3D%22217.7%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16f9e78927b%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16f9e78927b%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3125%22%20y%3D%22217.7%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16f9e78927c%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16f9e78927c%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22276.9921875%22%20y%3D%22217.7%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>

                    <p className="text-center top-margin">
                        Product Description
                    </p>
                </Tab>
                {/* <Tab eventKey="cart" title="Cart">
                    <Cart></Cart>
                </Tab> */}
                <Tab eventKey="checkout" title="Checkout">
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="0"
                                >
                                    First Step
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="1"
                                >
                                    Second Step
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                    <Form className="top-margin">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Tab>
            </Tabs>
        </div>
    );
};
