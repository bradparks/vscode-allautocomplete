/**
 * COPYRIGHT 2017 Atishay Jain<contact@atishay.me>
 *
 * MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
 * OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

'use strict';
import * as vscode from 'vscode';
import { Settings } from './Settings';
import * as path from 'path';
import * as minimatch from 'minimatch';

export function shouldExcludeFile(file: string): boolean {
    if (Settings.buildInFilesToExclude.indexOf(file) !== -1) {
        return true;
    }
    return minimatch(this.relativePath(file), Settings.excludeFiles);
}

export function relativePath(filePath: string) {
    if (!vscode.workspace.rootPath) { return filePath; }
    if (filePath.indexOf(path.sep) === -1) { return filePath; }
    return path.relative(vscode.workspace.rootPath, filePath);
}