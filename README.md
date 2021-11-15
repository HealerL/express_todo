# express_todo
基于express框架的 todoList的简单练习
使用在线的mongodB进行数据存储，利用mongoose来操作数据库。

- app.js负责创建服务器，并利用中间件接收route的路由处理
- route.js 负责路由处理，为三种请求进行不同的处理
- todo.ejs使用模板引擎来接受后端内容
- todo-list.js负责添加元素或者删除时发送请求到服务器，然后在回调函数中进行页面刷新来更新内容，必须服务端要返回响应才能出发ajax的回调函数
