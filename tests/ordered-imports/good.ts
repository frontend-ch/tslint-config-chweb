import * as glob from 'glob';
import { isAbsolute, parse } from 'path';
import tslint from 'tslint';
import { TsConfigSourceFile } from 'typescript';
import * as good from '../array-type/good';
import * as bad from '../curly/bad';
