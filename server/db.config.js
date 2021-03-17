/*
 * @Author: liuchenxi
 * @Date: 2020-09-25 22:19:03
 * @LastEditTime: 2021-03-16 15:51:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\server\model\config.js
 */
import Sequelize from 'sequelize'

// 在这里修改数据库的配置
const config = {
  host: 'localhost',
  username: 'root',
  password: 'liuchenxi0428',
  database: 'blog-nuxt'
}

// Object-Relational Mapping，把关系数据库的表结构映射到对象上。
// 推荐廖雪峰老师：https://www.liaoxuefeng.com/wiki/1022910821149312/1101571555324224

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 30000
    }
  }
)

export default sequelize
