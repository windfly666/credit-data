pragma solidity ^0.5.0;
import "./lu_class.sol";
contract cha is lu_class {
  function stu_all_class()public{
      require(stud[msg.sender].sui[msg.sender].hasLog == true,"请先登录");
              for(uint256 j =1;j<=4;j++){
                    for(uint256 i = 0 ;i<all_class_id.length;i++){
                          if(stud[msg.sender].x_class[j].xq_class[all_class_id[i]].id!=0)
                    emit stu_all_class_event(
                            j,
                            stud[msg.sender].x_class[j].xq_class[all_class_id[i]].name,
                            stud[msg.sender].x_class[j].xq_class[all_class_id[i]].id,
                            stud[msg.sender].x_class[j].xq_class[all_class_id[i]].xuefen,
                            stud[msg.sender].x_class[j].xq_class[all_class_id[i]].tea_name,
                            stud[msg.sender].x_class[j].xq_class[all_class_id[i]].bxOrxx,
                            stud[msg.sender].x_class[j].xq_class[all_class_id[i]].score,
                            stud[msg.sender].x_class[j].xq_class[all_class_id[i]].pingyu
                          );
                        }
                  }
        }
        event cha_ta_chengji_Event(string name,uint id,string class_name,uint class_id,bool bi_xuan,bool can,uint score);
        function cha_ta_chengji(address stu,uint class_id)public{
          stud[stu].stu_cha[stu].n.push(msg.sender);
          if(stud[stu].stu_cha[msg.sender].can == true){
            for(uint256 j =1;j<=4;j++){
              if(stud[stu].x_class[j].xq_class[class_id].id==class_id){
              emit cha_ta_chengji_Event(
                  stud[stu].name,
                  stud[stu].id,
                  stud[stu].x_class[j].xq_class[class_id].name,
                  stud[stu].x_class[j].xq_class[class_id].id,
                  stud[stu].x_class[j].xq_class[class_id].bxOrxx,
                  stud[stu].stu_cha[msg.sender].can,
                  stud[stu].x_class[j].xq_class[class_id].score
              );
            }

          }
        }else{
          for(uint256 j =1;j<=4;j++){
            if(stud[stu].x_class[j].xq_class[class_id].id==class_id){
            emit cha_ta_chengji_Event(
                stud[stu].name,
                stud[stu].id,
                stud[stu].x_class[j].xq_class[class_id].name,
                stud[stu].x_class[j].xq_class[class_id].id,
                stud[stu].x_class[j].xq_class[class_id].bxOrxx,
                stud[stu].stu_cha[msg.sender].can,
                stud[stu].x_class[j].xq_class[class_id].score
            );
          }
          }
        }

        }


        function chafangwen()public{
          for(uint i = 0;i<stud[msg.sender].stu_cha[msg.sender].n.length;i++)
          emit chafangwen_event(stud[msg.sender].stu_cha[msg.sender].n.length,stud[msg.sender].stu_cha[msg.sender].n[i]);
        }


        function jihuo(address stu)public{
          stud[msg.sender].stu_cha[stu].can = true;
            emit shouquan_shijian(stud[msg.sender].stu_cha[stu].can);
        }

        event cha_ta_chengjiu_shijian(string name,uint id,string chengjiu,bool chengjiu_can);
        function cha_ta_chengjiu(address stu)public {
          if(stud[stu].stu_cha[msg.sender].chengjiu_can == true){
          emit cha_ta_chengjiu_shijian(stud[stu].name,stud[stu].id,stud[stu].chengjiu,stud[stu].stu_cha[msg.sender].chengjiu_can);
          }
          else
          emit cha_ta_chengjiu_shijian(stud[stu].name,stud[stu].id,stud[stu].chengjiu,stud[stu].stu_cha[msg.sender].chengjiu_can);
        }

        event jihuochengjiu_shijian(bool chengjiu_can);
        function jihuo_chengjiu(address stu)public{
          stud[msg.sender].stu_cha[stu].chengjiu_can = true;
          emit jihuochengjiu_shijian(stud[msg.sender].stu_cha[stu].chengjiu_can);
        }

}
