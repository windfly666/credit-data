pragma solidity ^0.5.0;
import "./lu_chengjiu.sol";
contract chengjidan is lu_chengjiu {
  event print_chengjidan_event(string name,uint id,uint score,bool bi_xuan,string tea_name);
  function print_chengjidan()public{
      for(uint j = 1;j<=4;j++){
        for(uint256 i =0;i<all_class_id.length;i++){
            if(stud[msg.sender].x_class[j].xq_class[all_class_id[i]].score!=0)
              emit print_chengjidan_event(
              stud[msg.sender].x_class[j].xq_class[all_class_id[i]].name,
              stud[msg.sender].x_class[j].xq_class[all_class_id[i]].id,
              stud[msg.sender].x_class[j].xq_class[all_class_id[i]].score,
              stud[msg.sender].x_class[j].xq_class[all_class_id[i]].bxOrxx,
              stud[msg.sender].x_class[j].xq_class[all_class_id[i]].tea_name
        );
      }
  }
}

}
