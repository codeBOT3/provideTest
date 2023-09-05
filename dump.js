/*
    DATA(south_africa_tax_data) = VALUE p0149_tab( ( begda = '20230101' endda = '20240115' pfind = 'FT' txpro = '1' regno = '01' txsta = 'AA' )
                                                   ( begda = '20240116' endda = '20240117' pfind = 'FT' txpro = '1' regno = '04' txsta = 'BB' )
                                                   ( begda = '20240118' endda = '99991231' pfind = 'PT' txpro = '1' regno = '04' txsta = 'BB' ) ).

    DATA(hire_fire_action_data) = VALUE p0000_tab( ( begda = '20230101' endda = '20240119' stat2 = '3')
                                                   ( begda = '20230120' endda = '99991231' stat2 = '0')  ).

*/

/*

    DATA(expected_tax_calc_data_table) = VALUE hrpayza_st(
        ( begda = '20230101' endda = '20240115' stat2 = '3' pfind = 'FT' txpro = '1' regno = '01' )
        ( begda = '20240116' endda = '20240117' stat2 = '3' pfind = 'FT' txpro = '1' regno = '04' )
        ( begda = '20240118' endda = '20230119' stat2 = '3' pfind = 'PT' txpro = '1' regno = '04' )
        ( begda = '20230120' endda = '20240131' stat2 = '0' pfind = 'PT' txpro = '1' regno = '04' ) ).


*/



