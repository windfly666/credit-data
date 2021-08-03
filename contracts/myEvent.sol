pragma solidity ^0.5.0;


contract myEvent {

event shouquan_shijian(bool can);
event register(address useraddress);  //注册
event login(string username, bool userpost);  //登录
event chafangwen_event(uint num,address stu_address);

event luru(string name,uint256 id,string xueyuan,string zhuanye);
event show(string name,uint256 id,bool userpost,string zhuanye);

event luruTerm_event(uint256 bi_score,uint256 term);
event luru_xuan_all_score_event(uint256 xuan_all_score);
event cha_stu_score_event(string class_name,uint256 class_id,uint256 class_score,uint256 class_xufen);
event stu_xuefen_event(uint256 haven_bx,uint256 haven_xx);

event luru_bixiu_class_event(string bixiu_name,uint256 bixiu_id,uint256 bixiu_xuefen);
event luru_xuanxiu_class_event(string xuan_class_name,uint256 xuan_class_id,uint256 xuan_class_xuefen);
event chakan_all_xuan_event(string xuan_class_name,uint256 xuan_class_id,uint256 xuan_class_xuefen,string xuan_tea_name);
event stu_xuan_class_event(string xuan_class_name);
event stu_all_class_event(uint256 xueqi,string stu_all_class_name,uint256 stu_all_class_id,uint256 stu_all_class_xuefen,
      string stu_all_class_tea_name,bool bi_xuan,uint256 _score,string pingyu);

event luru_class_scoreEvent(uint256 _stu_id,uint256 _class_id,uint256 _score,string pingyu);
event cha_ta_chengji_Event(string stuName,uint id,string ke_name,uint ke_id,bool bi_xuan,uint score);


event is_pass_termEvent(string stu_name,uint256 _stu_id,bool is_pass);

event biyeEvent(string stu_name,uint256 stu_id,string stu_xueyuan,string stu_zhuanye,bool biye_true);

event tea_cha_scoreEvent(string stu_name,string stu_all_class_name,uint256 stu_all_class_id,uint256 stu_all_class_xuefen,
      string stu_all_class_tea_name,bool bi_xuan,uint256 _score);
event chengjiu_Event(string name,uint id,string chengjiu);


}
