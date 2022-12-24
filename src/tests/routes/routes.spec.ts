import resizeImage from "../../utils/imageProcessor";

describe("A suite to test out the resizeImage function", () => {
  it("should return a promise that resolves to void", () => {
    const width = 100;
    const height = 100;
    const originalImagePath = "test";
    const resizedImagePath = "tests";
    expectAsync(
      resizeImage({ width, height, originalImagePath, resizedImagePath })
    ).toBeRejected();
  });
});
