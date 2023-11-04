import chalk from 'chalk';

const choices = '(none, current, bundled, any npm version)';

/**
 * @type {import('generator-jhipster').JHipsterCommandDefinition}
 */
const command = {
  options: {},
  configs: {
    sourceCli: {
      description: `Executable to use to generate the ${chalk.yellow('source')} application`,
      cli: {
        type: String,
      },
      prompt: {
        type: 'input',
        message: `Which executable should be used to generate the ${chalk.yellow('source')} application?`,
      },
      scope: 'blueprint',
    },
    targetCli: {
      description: `Executable used to generate the ${chalk.yellow('target')} application`,
      cli: {
        type: String,
      },
      prompt: {
        type: 'input',
        message: `Which executable should be used to generate the ${chalk.yellow('target')} application?`,
      },
      scope: 'blueprint',
    },
    sourceVersion: {
      description: `JHipster version to use to generate the ${chalk.yellow('source')} application ${choices} (default: current)`,
      cli: {
        type: String,
      },
      prompt: {
        type: 'input',
        message: `Which JHipster version should be used to generate the ${chalk.yellow(
          'source',
        )} application? ${choices} (default: current)`,
      },
      scope: 'blueprint',
    },
    targetVersion: {
      description: `JHipster version to use to generate the ${chalk.yellow('target')} application ${choices} (default: bundled)`,
      cli: {
        type: String,
      },
      prompt: {
        type: 'input',
        message: `Which JHipster version should be used to generate the ${chalk.yellow(
          'target',
        )} application? ${choices} (default: bundled)`,
      },
      scope: 'blueprint',
    },
    sourceCliOptions: {
      description: `Executable options to generate the ${chalk.yellow('source')} application`,
      cli: {
        type: String,
      },
      prompt: {
        type: 'input',
        message: `Which executable options to generate the ${chalk.yellow('source')} application?`,
      },
      scope: 'blueprint',
    },
    targetCliOptions: {
      description: `Executable options to generate the ${chalk.yellow('target')} application`,
      cli: {
        type: String,
      },
      prompt: {
        type: 'input',
        message: `Which executable options to generate the ${chalk.yellow('target')} application?`,
      },
      scope: 'blueprint',
    },
    /*
    SourceBlueprints: {
      description: `Migrate from specific blueprint versions instead of the current, e.g. --target-blueprint-versions foo@0.0.1,bar@1.0.2`,
      cli: {
        type: String,
      },
      scope: 'blueprint',
    },
    targetBlueprints: {
      description: `Migrate to specific blueprint versions instead of the latest, e.g. --target-blueprint-versions foo@0.0.1,bar@1.0.2`,
      cli: {
        type: String,
      },
      scope: 'blueprint',
    },
    */
    verbose: {
      description: `Ask for configs, wait for config changes and shows output of the generation process`,
      cli: {
        type: Boolean,
      },
      scope: 'generator',
    },
  },
};

export default command;
