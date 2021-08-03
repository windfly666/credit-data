pragma solidity ^0.5.0;
import "./all.sol";
contract lu_class is all {
  function luru_bixiu_class(string memory _class,uint256 _id,uint256 _xuefen,bool bixuan) public Is_teacher {
          if(bixuan){
            for(uint256 i=0; i<stu_address.length;i++) {
                  if( keccak256(abi.encodePacked(tea[msg.sender].zhuanye)) == keccak256(abi.encodePacked(stud[stu_address[i]].zhuanye))){
                       stud[stu_address[i]].x_class[m].xq_class[_id] = class(_class,_id,0,_xuefen,tea[msg.sender].name,true,false,m," ");
                       }
                      }
              xuenian_class[_id].xuenian = m;
              the_real_term[m].xq_class[_id] = class(_class,_id,0,_xuefen,tea[msg.sender].name,true,false,m," ");

              if(m==1) class1.push(_id);
              if(m==2) class2.push(_id);
              if(m==3) class3.push(_id);
              if(m==4) class4.push(_id);
            }
            else{
              xuenian_class[_id].xuenian = m;
              the_real_term[m].xq_class[_id] = class(_class,_id,0,_xuefen,tea[msg.sender].name,false,false,m," ");
              class_id.push(_id);

            }
              all_class_id.push(_id);
              emit luru_bixiu_class_event(_class,_id,_xuefen);

                  }
}
