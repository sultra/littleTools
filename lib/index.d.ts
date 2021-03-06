import { Request, Response, NextFunction } from 'express';

export declare namespace tools{
    function matchString(strings: string, reference: string): boolean;
    function randomString(length: number): string;
    function readConfig(option: ConfigOption): any;
    function mergeObject(target: any, sources: any[]): void;
    function loadYaml(filePath: string): any;
}
export interface ConfigOption {
    fileType: string;
    configPath: string;
    defaultFileName: string;
}

export declare namespace expressMidware {
    function responseAccordingAccept(data: any, request: Request, response: Response, next: NextFunction): void;
    function responseErrorAccordingAccept(error: Error, request: Request, response: Response, next: NextFunction): void;
}
