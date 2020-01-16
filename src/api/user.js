/*
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-14 16:48:37
 * @FilePath: \excel-to-jsonf:\vue-project\alien-vue-admin\src\api\user.js
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

/**
 * 获取用户信息
 */
export function getUserMessageList() {
  return request.get('/user/message/list')
}

/**
 * 获取用户菜单
 */
export function getMenuMessageList() {
  return request.get('/menu/message/list')
}
