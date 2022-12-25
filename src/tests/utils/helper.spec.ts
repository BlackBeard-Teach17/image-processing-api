import checkFileExtension, {
  createDir,
  checkDir,
  imageValidator,
} from "../../utils/helpers";
const fs = require("fs");
const path = require("path");

beforeAll(() => {
  const dirPath = "testDir";
  createDir(dirPath);
});

afterAll(() => {
  /**
   * Test to clean up the testDir folder
   */
  const dirPath = "testDir";
  if (checkDir(dirPath) === true) {
    fs.readdirSync(dirPath).forEach((file: string) => {
      const curPath = path.join(dirPath, file);
      fs.unlinkSync(curPath);
    });
  }
  fs.rmdirSync(dirPath);
});

describe("Test the helper functions", () => {
  it("Tests that checkFileExtention function throws an error if the file extension is invalid", () => {
    const extname = ".test";
    expect(() => checkFileExtension(extname)).toThrow();
  });
  it("test that the CheckDir function returns true if dir exists", () => {
    const dirPath = "testDir";
    expect(checkDir(dirPath)).toBe(true);
  });

  it("Test the checkDir function", () => {
    const dirPath = "testDirs";
    expect(checkDir(dirPath)).toBe(false);
  });

  it("Test the imageValidator function", () => {
    const filename = "test";
    const width = 100;
    const height = 100;
    imageValidator(filename, width, height);
    expect(true).toBe(true);
  });

  it("Test the imageValidator function with invalid parameters", () => {
    const filename = "test";
    const width = 100;
    const height = parseInt("test");
    expect(() => imageValidator(filename, width, height)).toThrow();
  });
});
