import {expectType} from 'tsd';
import resolveGlobal = require('.');

expectType<string>(resolveGlobal('cat-names'));
expectType<string | undefined>(resolveGlobal.silent('cat-names'));
