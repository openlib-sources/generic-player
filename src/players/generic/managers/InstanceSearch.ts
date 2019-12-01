import {instanceRegistry} from "../../../registries/InstanceRegistry";
import {GenericPlayer} from "../GenericPlayer";

export class InstanceSearch {
    static async fromElement(element: HTMLElement) : Promise<GenericPlayer | null> {
        const instances = instanceRegistry.fetchAll();
        for (const instance of instances) {
            const instanceElement = await instance.getElement();
            if (instanceElement === element) {
                return instance;
            }
        }
        return null
    }

    static async fromArray(elements: HTMLElement[]) : Promise<GenericPlayer[]> {
        const
            result: GenericPlayer[] = [],
            instances: Promise<GenericPlayer | null>[] = elements.map(el => this.fromElement(el));

        for (const instancePromise of instances) {
            const instance = await instancePromise;
            if(instance instanceof GenericPlayer) {
                result.push(instance);
            }
        }
        return result;
    }

    static async fromString(selector: string) {
        const nodeList = document.body.querySelectorAll(selector);
        return this.fromArray(Array.prototype.slice.call(nodeList));
    }
}