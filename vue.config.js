const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    //��ǰ��Ŀ�ڿ������Խ׶�
    //�Ὣ�κ�δ֪��������ýӿ�
    //���ڿ����׶���Ч
    proxy:'https://www.escook.cn',
  }
})
