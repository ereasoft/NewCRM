package com.hk.crm.mapper;
 
import java.util.*;
import org.apache.ibatis.annotations.Mapper;

@Mapper
@SuppressWarnings("rawtypes")
public interface AmtMapper {

//지로EDI
public List<HashMap> getAmt1001(HashMap params);
public List<HashMap> getAmt1002(HashMap params);
public List<HashMap> getAmt1003(HashMap params);
public List<HashMap> getAmt1004(HashMap params);
public List<HashMap> getAmt1005(HashMap params);
public List<HashMap> getAmt1006(HashMap params);
public List<HashMap> getAmt1007(HashMap params);
public List<HashMap> getAmt1008(HashMap params);
public List<HashMap> getAmt1009(HashMap params);

// 지로영수증 발행 - 일괄
public List<HashMap> getAmt1700(HashMap params);
public List<HashMap> getAmt1701(HashMap params);
public List<HashMap> getAmt1702(HashMap params);
public List<HashMap> getAmt1703(HashMap params);
public List<HashMap> getAmt1703_GIROA4X3(HashMap params);
public List<HashMap> getAmt1704(HashMap params);
public List<HashMap> getAmt1705(HashMap params);

// 지로영수증 발행 - 낱장
public List<HashMap> getAmt2000(HashMap params);
public List<HashMap> getAmt2001(HashMap params);
public List<HashMap> getAmt2002(HashMap params);
public List<HashMap> getAmt2003(HashMap params);
public List<HashMap> getAmt2004(HashMap params);
public List<HashMap> getAmt2005(HashMap params);
public List<HashMap> getAmt2006(HashMap params);

// 자동이체 - 신청관리
public List<HashMap> getAmt1300(HashMap params);
public List<HashMap> getAmt1301(HashMap params);
public List<HashMap> getAmt1302(HashMap params);
public List<HashMap> getAmt1303(HashMap params);
public List<HashMap> getAmt1304(HashMap params);
public List<HashMap> getAmt1305(HashMap params);
public List<HashMap> getAmt1306(HashMap params);
public List<HashMap> getAmt1307(HashMap params);

//자동이체 - 신청작업관리
public List<HashMap> getAmt1400(HashMap params);
public List<HashMap> getAmt1401(HashMap params);
public List<HashMap> getAmt1402(HashMap params);
public List<HashMap> getAmt1403(HashMap params);
public List<HashMap> getAmt1405(HashMap params);
public List<HashMap> getAmt1408(HashMap params);
public List<HashMap> getAmt1409(HashMap params);
public List<HashMap> getAmt1410(HashMap params);
public List<HashMap> getAmt1411(HashMap params);
public List<HashMap> getAmt1412(HashMap params);
public List<HashMap> getAmt1413(HashMap params);
public List<HashMap> getAmt1433(HashMap params);

//자동이체 - 자동이체 승인오류 관리
public List<HashMap> getAmt3000(HashMap params);
public List<HashMap> getAmt3001(HashMap params);
public List<HashMap> getAmt3002(HashMap params);
public List<HashMap> getAmt3004(HashMap params);

//자동이체 - 현황조회
public List<HashMap> getAmt1501(HashMap params);

//자동이체 - 청구관리
public List<HashMap> getAmt1601(HashMap params);
public List<HashMap> getAmt1602(HashMap params);
public List<HashMap> getAmt1603(HashMap params);
public List<HashMap> getAmt1604(HashMap params);
public List<HashMap> getAmt1606(HashMap params);
public List<HashMap> getAmt1607(HashMap params);
public List<HashMap> getAmt1608(HashMap params);
public List<HashMap> getAmt1609(HashMap params);
public List<HashMap> getAmt1610(HashMap params);

//자동이체 - 청구결과
public List<HashMap> getSSAmt1701(HashMap params);
public List<HashMap> getSSAmt1702(HashMap params);

//자동이체 - 납부자관리
public List<HashMap> getAmt1800(HashMap params);
public List<HashMap> getAmt1801(HashMap params);
public List<HashMap> getAmt1802(HashMap params);
public List<HashMap> getAmt1803(HashMap params);
public List<HashMap> getAmt1804(HashMap params);
public List<HashMap> getAmt1805(HashMap params);
public List<HashMap> getAmt1806(HashMap params);
public List<HashMap> getAmt1807(HashMap params);
public List<HashMap> getAmt1808(HashMap params);
public List<HashMap> getAmt1809(HashMap params);
public List<HashMap> getAmt1810(HashMap params);
public List<HashMap> getAmt1811(HashMap params);
public List<HashMap> getAmt1813(HashMap params);

//휴대폰 자동이체
public List<HashMap> getAmt2701(HashMap params);
public List<HashMap> getAmt2702(HashMap params);
public List<HashMap> getAmt2705(HashMap params);
public List<HashMap> getAmt2707(HashMap params);

//카드 자동이체 - 카드청구(기존)
public List<HashMap> getAmt2801(HashMap params);
public List<HashMap> getAmt2802(HashMap params);
public List<HashMap> getAmt2805(HashMap params);
public List<HashMap> getAmt2807(HashMap params);

//카드 자동이체 - 카드청구(신규)
public List<HashMap> getAmt4301(HashMap params);
public List<HashMap> getAmt4302(HashMap params);
public List<HashMap> getAmt4307(HashMap params);

//독자환불관리
public List<HashMap> getAmt3201(HashMap params);
public List<HashMap> getAmt3205(HashMap params);

//지국이체 - 지국송금이체
public List<HashMap> getAmt2601(HashMap params);
public List<HashMap> getAmt2602(HashMap params);
public List<HashMap> getAmt2603(HashMap params);
public List<HashMap> getAmt2604(HashMap params);
public List<HashMap> getAmt2606(HashMap params);
public List<HashMap> getAmt2608(HashMap params);
public List<HashMap> getAmt2610(HashMap params);
public List<HashMap> getAmt2611(HashMap params);
public List<HashMap> getAmt2612(HashMap params);


}
