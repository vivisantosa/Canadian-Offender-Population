-- Creating tables

-- API query from OpenCanada
CREATE TABLE raw_incarceration (
index INT PRIMARY KEY,
incustody_community2 VARCHAR,
province2 VARCHAR,
ethnicity VARCHAR,
year INT,
number VARCHAR,
race VARCHAR,
race_group VARCHAR,
racial_profile VARCHAR,
gender VARCHAR,
age INT,
incustody_community VARCHAR,
supervision_type VARCHAR,
sentence_type VARCHAR,
aggregate_sentence_length INT,
province VARCHAR,
marital_status VARCHAR,
religion VARCHAR    
);


--API query from StatCan
CREATE TABLE raw_statcan (
index INT PRIMARY KEY,
ethnicity VARCHAR,
topic VARCHAR,
characteristics VARCHAR,
AB INT,
BC INT,
MB INT,
SK INT,
NL INT,
NS INT,
NB INT,
NU INT,
PE INT,
QC INT,
ON INT,
YU INT,
NW INT,
National INT,
AB_Male INT,
BC_Male INT,
MB_Male INT,
SK_Male INT,
NL_Male INT,
NS_Male INT,
NB_Male INT,
NU_Male INT,
PE_Male INT,
QC_Male INT,
ON_Male INT,
YU_Male INT,
NW_Male INT,
National_Male INT,
AB_Female INT,
BC_Female INT,
MB_Female INT,
SK_Female INT,
NL_Female INT,
NS_Female INT,
NB_Female INT,
NU_Female INT,
PE_Female INT,
QC_Female INT,
ON_Female INT,
YU_Female INT,
NW_Female INT,
National_Female INT
);



-- Table 1: Linked and Transformed 2016 incarceration data (from OpenCanada) and population data (from StatCan)
CREATE TABLE table1 (
index INT PRIMARY KEY,
year INT,
PRUID VARCHAR,
province VARCHAR,
race VARCHAR,
sex VARCHAR,
province_sex VARCHAR,
population VARCHAR,
arrested VARCHAR,
race_percent_population NUMERIC,
race_percent_arrested NUMERIC,
race_disparity_index NUMERIC
);


-- Table 2: Transformed 2012-2018 OpenCanada incarceration data 
CREATE TABLE table2 (
index INT PRIMARY KEY,
year INT,
PRUID VARCHAR,
province VARCHAR,
race VARCHAR,
sex VARCHAR,
in_custody_community VARCHAR,
avg_length INT,
arrested INT
);


-- Table 3: Transformed and aggregated Race Disparity Index data (for map visualization)
CREATE TABLE table3 (
index INT PRIMARY KEY,
year INT,
PRUID VARCHAR,
province VARCHAR,
aboriginal_disparity_index NUMERIC,
black_disparity_index NUMERIC,
other_disparity_index NUMERIC,
white_disparity_index NUMERIC
);

