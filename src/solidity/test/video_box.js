const VideoBox = artifacts.require("VideoBox");

contract("VideoBox", function (/* accounts */) {
  beforeEach(async () => {
    instance = await VideoBox.new();
  });

  it("default name should be empty", async() => {
    const name = await instance.getName()

    assert.equal("", name)
  });

  it("changeName should change the name", async() => {
    await instance.changeName("john");

    const name = await instance.getName();

    assert.equal("john", name);
  });
});
