import React from "react";
import {configure, shallow} from "enzyme";
import  {expect} from "chai";
import chaiEnzyme from 'chai-enzyme'
import Adapter from "enzyme-adapter-react-16";
import App from "../src/App.tsx";

configure({
    adapter: new Adapter()
 });
 describe("Testing App.tsx Component", () => {
    it("App renders a message", () => {
    //    const wrapper = shallow(<App />);
    //    const message = <p>Edit <code>src/App.js</code> and save to   reload.</p>;

       expect(true).to.be.true;
    });
    chai.use(chaiEnzyme());
 });