import { Request, Response, NextFunction } from 'express';

export declare namespace tools{
    function matchString(strings: string, reference: string): boolean;
    function randomString(length: number): string;
    function readConfig(option: ConfigOption): any;
    function mergeObject(target: any, sources: any[]): void;
    function loadYaml(filePath: string): any;
   

    interface ConfigOption {
        fileType: string;
        configPath: string;
        defaultFileName: string;
    }
}

export declare namespace expressMW {
    function requestAccept(data: any, request: Request, response: Response, next: NextFunction): void;
}
