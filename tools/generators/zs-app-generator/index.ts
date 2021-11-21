import { camelize, classify, dasherize } from '@angular-devkit/core/src/utils/strings';
import { formatFiles, generateFiles, installPackagesTask, joinPathFragments, Tree } from '@nrwl/devkit';
import { wrapAngularDevkitSchematic } from '@nrwl/devkit/ngcli-adapter';
import { stringUtils } from '@nrwl/workspace';

export default async function (host: Tree, schema: any) {
    const applicationGenerator = wrapAngularDevkitSchematic('@nrwl/angular', 'app');

    await applicationGenerator(host, {
        name: schema.name,
    });

    generateFiles(host, joinPathFragments(__dirname, './files'), 'apps/' + schema.name + '/src/', {
        ...schema,
        dashName: stringUtils.dasherize(schema.name),
        dasherize: stringUtils.dasherize,
        classify: stringUtils.classify,
        camelize: stringUtils.camelize,
    });

    await formatFiles(host);

    return () => {
        installPackagesTask(host);
    };
}
