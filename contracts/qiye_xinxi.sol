pragma solidity ^0.5.0;
import "./chengjidan.sol";
contract qiye_xinxi is chengjidan{

  function qiye_register(string memory newname,string memory newpassword)public{
    require((stud[msg.sender].sui[msg.sender].hasReg == false)&&(tea[msg.sender].tui[msg.sender].hasReg == false),"该地址已被注册！");
        the_real_qiye[msg.sender].qiye_info[msg.sender]=Userinfo(newname,newpassword,false,true,false,false);
        qiye_dizhi.push(msg.sender);
        emit register(msg.sender);
    }
  function qiye_degnlu(string memory yourname,string memory yourpassword)public {
    require((the_real_qiye[msg.sender].qiye_info[msg.sender].hasReg == true),"该账户地址未注册 ");
    require( ((keccak256(abi.encodePacked(the_real_qiye[msg.sender].qiye_info[msg.sender].name))== keccak256( abi.encodePacked(yourname )))
             &&(keccak256(abi.encodePacked(the_real_qiye[msg.sender].qiye_info[msg.sender].password))== keccak256( abi.encodePacked( yourpassword)))
             )
         ,"账号或密码错误"  );
    emit login(the_real_qiye[msg.sender].qiye_info[msg.sender].name , the_real_qiye[msg.sender].qiye_info[msg.sender].is_qiye);
  }


 function cha_qiye_dizhi()public{
     for(uint i = 0;i<qiye_dizhi.length;i++){
       emit chafangwen_event(qiye_dizhi.length,qiye_dizhi[i]);
     }
 }

 function qiye_shouquan(address qiye_address)public Is_teacher is_jiaowu_chu(tea[msg.sender].xueyuan){
     the_real_qiye[qiye_address].qiye_info[qiye_address].is_qiye = true;
     emit login(the_real_qiye[qiye_address].qiye_info[qiye_address].name , the_real_qiye[qiye_address].qiye_info[qiye_address].is_qiye);
 }
 event qiye_luru_shijian(string name,string dizhi,string jianjie);

 function qiye_luru(string memory _name,string memory _dizhi,string memory jianjie)public{
     the_real_qiye[msg.sender] = qiye(_name,_dizhi,jianjie);
     emit qiye_luru_shijian(the_real_qiye[msg.sender].name,the_real_qiye[msg.sender].dizhi,the_real_qiye[msg.sender].jianjie);
 }


 function cha_qiye(address addr)public{
       emit qiye_luru_shijian(the_real_qiye[addr].name,the_real_qiye[addr].dizhi,the_real_qiye[addr].jianjie);
 }
 function cha_xueqi_pass(uint t)public Is_teacher{
   uint pass_stu = 0;
   for(uint i = 0;i<stu_address.length;i++){
     if(is_pass_term2(stu_address[i],t)){
       pass_stu++;
     }
   }
    emit is_pass_termEvent("",pass_stu,false);
 }
 function biye_stu_info(address stu)public{
               emit show_x_x(
                   stud[stu].name,
                   stud[stu].id,
                   stud[stu].x_x[stu].banji,
                   stud[stu].xueyuan,
                   stud[stu].zhuanye,
                   stud[stu].x_x[stu].birth,
                   stud[stu].x_x[stu].telephone,
                   stud[stu].x_x[stu].j,
                   stud[stu].dangyuan
                   );
 }
 function biye_stu_kecheng(address stu)public{
   for(uint256 j =1;j<=4;j++){
         for(uint256 i = 0 ;i<all_class_id.length;i++){
               if(stud[stu].x_class[j].xq_class[all_class_id[i]].id!=0)
         emit stu_all_class_event(
                 j,
                 stud[stu].x_class[j].xq_class[all_class_id[i]].name,
                 stud[stu].x_class[j].xq_class[all_class_id[i]].id,
                 stud[stu].x_class[j].xq_class[all_class_id[i]].xuefen,
                 stud[stu].x_class[j].xq_class[all_class_id[i]].tea_name,
                 stud[stu].x_class[j].xq_class[all_class_id[i]].bxOrxx,
                 stud[stu].x_class[j].xq_class[all_class_id[i]].score,
                 stud[stu].x_class[j].xq_class[all_class_id[i]].pingyu
               );
             }
       }
 }
event show_biye_stu_chengjiu(string name,uint id,uint siliujichengji,bool si_liu,string chengjiu);
 function biye_stu_chengjiu(address stu)public{
   if(stud[stu].x_x[stu].siOrliu){
     emit show_biye_stu_chengjiu(
         stud[stu].name,
         stud[stu].id,
         stud[stu].x_x[stu].siliuji_chengji,
         stud[stu].x_x[stu].siOrliu,
         stud[stu].chengjiu
         );
       }
   else {
     emit show_biye_stu_chengjiu(
         stud[stu].name,
         stud[stu].id,
         stud[stu].x_x[stu].liujichengji,
         stud[stu].x_x[stu].siOrliu,
         stud[stu].chengjiu
         );
       }
 }
 event xuefen_shijian(uint bi_xuefen,uint xuan_xuefen);
 function tongji_xuefen()public{
   emit xuefen_shijian(stud[msg.sender].haven_bx,stud[msg.sender].haven_xx);
 }
 event chexiao_shijian(bool chexiao);
 function chexiao(address stu)public Is_teacher is_jiaowu_chu(tea[msg.sender].xueyuan){
   for(uint i = 0; i<stu_address.length;i++){
    if(stu_address[i] == stu){
      stud[stu_address[i]].sui[stu_address[i]].hasReg = false;
      delete stu_address[i];
    }
   }
   emit chexiao_shijian(true);
 }

event cha_renshu(uint n);
 function cha_stu_renshu()public Is_teacher{
   uint jishu;
   for(uint i = 0;i<stu_address.length;i++){
   if(     (keccak256(abi.encodePacked(tea[msg.sender].xueyuan))) == (keccak256(abi.encodePacked(stud[stu_address[i]].xueyuan))))
   {
     jishu++;
   }

 }
emit cha_renshu(jishu);
}


function cha_biye_renshu()public Is_teacher{

    uint jishu;
    for(uint i = 0;i<stu_address.length;i++){
    if(     (keccak256(abi.encodePacked(tea[msg.sender].xueyuan))) == (keccak256(abi.encodePacked(stud[stu_address[i]].xueyuan))))
    {  if(tea_cha_biye(stu_address[i])){
       jishu++;
    }

    }

  }
  emit cha_renshu(jishu);
}
}
