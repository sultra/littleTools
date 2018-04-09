/// <reference types="node" />

import { Request, Response, NextFunction } from 'express';



export =littletools;

declare namespace littletools{
    interface tools {
        matchString(strings: string, reference: string): boolean;
        randomString(length: number): string;
        readConfig(option: ConfigOption): any;
        mergeObject(target: any, sources: any[]): any;
        loadYaml(filePath: string): any;
    }

    interface expressMW {
        requestAccept(data: any, request: Request, response: Response, next: NextFunction): void;
    }

    interface ConfigOption {
        fileType: string;
        configPath: string;
        defaultFileName: string;
    }
}

