package com.telchina.hdcgioc.welcome.mapper;


import com.telchina.hdcgioc.welcome.entity.WelcomeData;
import com.telchina.hdcgioc.welcome.entity.wenshu_info;
import com.telchina.hdcgioc.welcome.entity.NoPenaltyWenshuInfo;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface WelcomeMapper {

    List<Map> get_penalty_class(String code);

    void saveData(String chinese, String engish, String imgsave, String imgnum);
    List<WelcomeData> readingData();
    List<String> get_penalty_definite(String penalty_class);
    List<String> get_edu();
    List<String> get_prision_type();

    int get_definite_num(String penalty_definite);
    List<Map> get_wenshu_ByDefinite(String code);
    int get_class_num(String penalty_class);
    List<wenshu_info> get_wenshu_Byclass(String penalty_class, int page_start, int page_size);
    //刑罚种类 文化程度 年龄 类罪 个罪

    List<wenshu_info> get_wenshu_filter_prison_edu(String penalty_class,String penalty_definite,String prison_type,String edu_level,int page_start, int page_size);
    int get_wenshu_filter_prison_eduNum(String penalty_class,String penalty_definite,String prison_type,String edu_level);
    List<wenshu_info> get_wenshu_filter_age(String penalty_class,String penalty_definite,int age_start,int age_end,int page_start, int page_size);
    int get_wenshu_filter_ageNum(String penalty_class,String penalty_definite,int age_start,int age_end);
    List<wenshu_info> get_wenshu_filter_province(String penalty_class,String penalty_definite,String province_address,String province_residence,int page_start, int page_size);
    int  get_wenshu_filter_provinceNum(String penalty_class,String penalty_definite,String province_address,String province_residence);
    List<wenshu_info> get_wenshu_filter_prisonLength(String penalty_class,String penalty_definite,double length_start,double length_end,int page_start,int page_size);
    int  get_wenshu_filter_prisonLengthNum(String penalty_class,String penalty_definite,double length_start,double length_end);
    List<wenshu_info> get_wenshu_filter_interMonth(String penalty_class,String penalty_definite,double start,double end,int page_start,int page_size);
    int get_wenshu_filter_interMonthNum(String penalty_class,String penalty_definite,int start,int end);
    int get_wenshu_filter_lawsNum(String penalty_class,String penalty_definite,String laws);
    List<wenshu_info> get_wenshu_filter_laws(String penalty_class,String penalty_definite,String laws,int page_start,int page_size);
    List<String> get_laws();
    //无罪判决相关

    List<String> get_noPenalty_key_word();
    List<String> get_noPenalty_laws();
    List<NoPenaltyWenshuInfo> get_noPenaltyFilter(String keyword,String law,int page_start,int page_size);
    int get_noPenaltyFilterCount(String keyword,String law);


}
