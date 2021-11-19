export abstract class StorageUtilService {
    public abstract createFilePath(data: string, folder?: string): string;
}
