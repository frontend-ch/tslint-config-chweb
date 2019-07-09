import tslint from 'tslint';
import * as glob from 'glob';
import { parse, isAbsolute } from 'path';
import * as bad from '../curly/bad';
import * as good from '../array-type/good';
import { TsConfigSourceFile } from 'typescript';
