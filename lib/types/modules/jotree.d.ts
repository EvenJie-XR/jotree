import * as POTREE from "potree-and-type";
export declare class Jotree {
    threeContainer: HTMLDivElement;
    viewer: POTREE.Viewer;
    constructor(threeContainer: HTMLDivElement);
    /**
     * 加载点云
     * @param path 点云路径
     * @param name 点云名字
     * @param callback 点云加载成功的回调
     * @param isAutoFitToScreen 是否自动居中到屏幕中间
     */
    loadPointCloud(path: string, name: string, callback: (pointcloud: any) => void, isAutoFitToScreen?: boolean): void;
}
