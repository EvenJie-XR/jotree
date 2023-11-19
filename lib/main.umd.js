(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('potree-and-type'), require('three')) :
    typeof define === 'function' && define.amd ? define(['exports', 'potree-and-type', 'three'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Jhree = {}, global.POTREE, global.THREE));
}(this, (function (exports, POTREE, THREE) { 'use strict';

    class Jotree {
        threeContainer;
        viewer;
        constructor(threeContainer) {
            this.threeContainer = threeContainer;
            this.viewer = new POTREE.Viewer(threeContainer);
            this.viewer.setEDLEnabled(true);
            this.viewer.setFOV(60);
            this.viewer.setPointBudget(1000000);
        }
        /**
         * 加载点云
         * @param path 点云路径
         * @param name 点云名字
         * @param callback 点云加载成功的回调
         * @param isAutoFitToScreen 是否自动居中到屏幕中间
         */
        loadPointCloud(path, name, callback, isAutoFitToScreen = true) {
            POTREE.loadPointCloud(path, name, (e) => {
                this.viewer.scene.addPointCloud(e.pointcloud);
                // 判断是不是里面position属性，如果有的话可以根据这个把居中失败的点云矫正成正确的居中
                if (e.pointcloud.pcoGeometry.loader.attributes) {
                    const realRange = e.pointcloud.pcoGeometry.loader.attributes.attributes.find((attribute) => {
                        return attribute.name === "position";
                    }).initialRange;
                    const z = e.pointcloud.position.z < 0 ? -e.pointcloud.position.z : e.pointcloud.position.z;
                    e.pointcloud.pcoGeometry.tightBoundingBox.max = new THREE.Vector3(e.pointcloud.boundingBox.max.x, e.pointcloud.boundingBox.max.y, realRange[1][2] + z);
                }
                let material = e.pointcloud.material;
                material.size = 1;
                material.pointSizeType = POTREE.PointSizeType.ADAPTIVE;
                if (isAutoFitToScreen) {
                    this.viewer.fitToScreen();
                }
                callback(e);
            });
        }
    }

    /**
     * jesium版本号
     */
    const version = require("../package.json").version;

    exports.Jotree = Jotree;
    exports.version = version;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
