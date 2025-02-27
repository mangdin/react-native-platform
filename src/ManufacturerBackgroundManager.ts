import { NativeModules } from 'react-native';
const { RNPlatform } = NativeModules;
import { isHuawei, isXiaomi, isVIVO, isOPPO, isMeizu } from './DeviceUtil';
export function isBackgroundSettingSupported() {
    return isHuawei() || isXiaomi() || isVIVO() || isOPPO() || isMeizu();
}
export function openBackgroundSettings() {
    return RNPlatform.openBackgroundSettings();
}
export function backgroudSettingTip() {
    if (isHuawei()) {
        return '应用启动管理 -> 打开【益华家长】允许开关';
    }
    else if (isXiaomi()) {
        return '自启动管理 -> 打开【益华家长】允许开关';
    }
    else if (isVIVO()) {
        return '应用管理 -> 权限管理 -> 自启动和悬浮窗 -> 打开【益华家长】允许开关';
    }
    else if (isOPPO()) {
        return '权限隐私 -> 自启动管理 -> 允许应用自启动';
    }
    else if (isMeizu()) {
        return '权限管理 -> 后台管理 -> 点击【益华家长】 -> 允许后台运行';
    }
    return '';
}
