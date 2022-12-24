import {
  DisplayProcessor,
  SpecReporter,
  StacktraceOption,
} from "jasmine-spec-reporter";

class CustomProcessor extends DisplayProcessor {
  public displayJasmineStarted(
    info: jasmine.JasmineStartedInfo,
    log: string
  ): string {
    return `${log}`;
  }
}

jasmine.getEnv().clearReporters(); // remove default reporter logs
jasmine.getEnv().addReporter(
  // add jasmine-spec-reporter
  new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.NONE,
    },
    customProcessors: [CustomProcessor],
  })
);
