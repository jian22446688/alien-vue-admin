/*
 * @Description: 通用的接口数据
 * @Author: Cary
 * @Date: 2019-12-09 10:18:16
 * @FilePath: f:\vue-project\alien-vue-admin\src\api\modules\common.js
 */
import request from '@/utils/request'

export function getCommonPrefile() {
  return request({
    url: '/common/prefile',
    method: 'get'
  })
}

export function getCommonPopular() {
  return request({
    url: '/common/popular',
    method: 'get'
  })
}

export function getCommonContainerList() {
  return request({
    url: '/common/containerList',
    method: 'get'
  })
}

export function getCommonWterImgList() {
  return request({
    url: '/common/wterimglist',
    method: 'get'
  })
}

export function getCommonImgList() {
  return request({
    url: '/common/imglist',
    method: 'get'
  })
}

export function getCommonTableList(data) {
  return request({
    url: '/common/tableList',
    method: 'post',
    data: data
  })
}

