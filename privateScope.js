/** * [控制私有访问] * @param {[type]} name [description] */ var Private = function(name){ var self = this; self.name = name; /** * 公共方法－－对外暴露的方法 * @return {[type]} [description] */ this.pubFunc = function(){ console.log(self.name); }; /** * 私有方法 * @return {[type]} [description] */ function priFunc(){ console.log(self.name); } }; var p = new Private("ALLEN"); p.pubFunc(); //p.priFunc();//出现语法错误