import { ethers } from "hardhat";
import { expect } from "chai";
import { DemoContract } from "../typechain-types";



describe("DemoContract Test1 ", function () {

    let demoContract: DemoContract;

    before(async function () {
        const DemoContract = await ethers.getContractFactory("DemoContract");
        demoContract = await DemoContract.deploy();
    });

    it("Should mint", async function () {
        const address = await demoContract.getAddress();
        const sampleBytesArray = [ethers.toUtf8Bytes('ArrayElement1'), ethers.toUtf8Bytes('ArrayElement2')];
        const tx = await demoContract.mint(address, 50, sampleBytesArray, true, ['0x742d35Cc6634C0532925a3b844Bc454e4438f44e', '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'], 23);
        expect(tx).to.not.be.reverted;
    });

    it("Should not revert function process types", async function () {
        const tx = await demoContract.processTypes(true, 42, 'Hello', -123, 5);
        expect(tx).to.not.be.reverted;
    });

    it("Should not revert function processAddresses", async function () {
        const tx = await demoContract.processAddresses('0x742d35Cc6634C0532925a3b844Bc454e4438f44e', ['0x742d35Cc6634C0532925a3b844Bc454e4438f44e', '0x742d35Cc6634C0532925a3b844Bc454e4438f44e']);
        expect(tx).to.not.be.reverted;
    });


    it("Should not revert function processBytes", async function () {
        const sampleBytes = ethers.toUtf8Bytes('Hello, World!');
        const sampleBytesArray = [ethers.toUtf8Bytes('ArrayElement1'), ethers.toUtf8Bytes('ArrayElement2')];
        const sampleBytes32 = ethers.id('Hello');
        const tx = await demoContract.processBytes(sampleBytes, sampleBytesArray, sampleBytes32);
        expect(tx).to.not.be.reverted;
    });

    it("Should not revert function processUint", async function () {
        const sampleUint = 1234567890;
        const sampleUint8 = 42;
        const tx = await demoContract.processUint(sampleUint, sampleUint8);
        expect(tx).to.not.be.reverted;
    });

    it("Should not revert function processEnums", async function () {
        const tx = await demoContract.processEnums(1);
        expect(tx).to.not.be.reverted;
    });

    it("Should not revert function ArrayTypesOne", async function () {
        const sampleBoolArray = [true, false, true];
        const sampleUintArray = [10, 20, 30];
        const sampleIntArray = [-5, 0, 5];
        const tx = await demoContract.processArrayTypesOne(sampleBoolArray, sampleUintArray, sampleIntArray);
        expect(tx).to.not.be.reverted;
    });

    it("Should not revert function ArrayTypesTwo", async function () {
        const sampleStringArray = ['apple', 'banana', 'cherry'];
        const sampleIntParamArray = [-5, 0, 5];
        const sampleInt8ParamArray = [1, 2, 3];
        const sampleUint8ParamArray = [10, 20, 30];
        const tx = await demoContract.processArrayTypesTwo(sampleStringArray, sampleIntParamArray, sampleInt8ParamArray, sampleUint8ParamArray);
        expect(tx).to.not.be.reverted;

    });

});

