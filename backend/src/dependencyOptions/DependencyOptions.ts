import {DependencyOption} from "@peu77/expresswrapper";
import {DependencyOptionResponse} from "@peu77/expresswrapper/build/Controller";

export const urlDependencyOption: DependencyOption<string> = async (value: string): Promise<DependencyOptionResponse> => {
    // TODO: validate url with regex
    const success = /^(http|https):\/\/[^ "]+$/.test(value);
    return {
        success,
        message: success ? "" : "url is not valid"
    }
}

export const uuidDependencyOption: DependencyOption<string> = async (value: string): Promise<DependencyOptionResponse> => {
    const success = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(value);
    return {
        success,
        message: success ? "" : "uuid is not valid"
    }
}