import {expectType} from 'tsd';
import {resolveGlobal, resolveGlobalSilent} from './index.js';

expectType<string>(resolveGlobal('cat-names'));
expectType<string | undefined>(resolveGlobalSilent('cat-names'));
