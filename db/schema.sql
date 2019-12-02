DROP DATABASE IF EXISTS fec_searchbar;

CREATE DATABASE fec_searchbar;

USE fec_searchbar;

CREATE TABLE products (
  id INT PRIMARY KEY,
  real_name TEXT,
  simple_name TEXT,
  category TEXT,
  description TEXT,
  image_address TEXT
);

INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (1,  'ANTILOP'             , 'antilop'             , 'chair'   , 'High Chair with tray'                , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (2,  'TOBIAS'              , 'tobias'              , 'chair'   , 'Chair'                               , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (3,  'HAVSTEN'             , 'havsten'             , 'chair'   , 'Chair, indoor/outdoor'               , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (4,  'GLENN'               , 'glenn'               , 'chair'   , 'Bar Stool'                           , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (5,  'FRANKLIN'            , 'franklin'            , 'chair'   , 'Bar Stool with backrest'             , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (6,  'JULES'               , 'jules'               , 'chair'   , 'Children''s Desk Chair'              , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (7,  'ÖRFJÄLL'             , 'orfjall'             , 'chair'   , 'Swivel chair'                        , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (8,  'GRÖNADAL'            , 'gronadal'            , 'chair'   , 'Rocking chair'                       , 'ADD IMAGE'); 
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (9,  'VÅGSBERG / SPORREN'  , 'vagsberg / sporren'  , 'chair'   , 'Armchair underframe'                 , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (10, 'DIETMAR'             , 'dietmar'             , 'chair'   , 'High Chair Tray'                     , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (11, 'LANGUR'              , 'langur'              , 'chair'   , 'Swivel chair'                        , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (12, 'JOKKMOKK'            , 'jokkmokk'            , 'chair'   , 'Table and 4 Chairs'                  , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (13, 'STEFAN'              , 'stefan'              , 'chair'   , 'Chair'                               , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (14, 'BALTSAR'             , 'baltsar'             , 'chair'   , 'Chair'                               , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (15, 'HARRY'               , 'harry'               , 'chair'   , 'Chair'                               , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (16, 'MARIUS'              , 'marius'              , 'chair'   , 'Stool'                               , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (17, 'MARTIN'              , 'martin'              , 'chair'   , 'Chair'                               , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (18, 'TROLLBERGET'         , 'trollberget'         , 'chair'   , 'Sitting/Standing support'            , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (19, 'KOLON'               , 'kolon'               , 'chair'   , 'Floor Protector'                     , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (20, 'MALINDA'             , 'malinda'             , 'chair'   , 'Chair pad'                           , 'ADD IMAGE');

INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (21, 'GONATT'              , 'gonatt'              , 'bed'     , 'Crib'                                , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (22, 'NORDLI'              , 'nordli'              , 'bed'     , 'Bed with headboard and storage'      , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (23, 'SAGSTUA'             , 'sagstua'             , 'bed'     , 'Bed frame'                           , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (24, 'GODFJORD'            , 'godfjord'            , 'bed'     , 'Bed frame'                           , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (25, 'SONGESAND'           , 'songesand'           , 'bed'     , 'Bed frame with 4 storage boxes'      , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (26, 'DELAKTIG'            , 'delaktig'            , 'bed'     , 'Bed frame with headboard&side tables', 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (27, 'HEMNES'              , 'hemnes'              , 'bed'     , 'Bed frame with 4 storage boxes'      , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (28, 'ESPEVÄR'             , 'espevar'             , 'bed'     , 'Divan bed'                           , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (29, 'UTÅKER'              , 'utaker'              , 'bed'     , 'Stackable bed with two mattresses'   , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (30, 'KVALFJORD'           , 'kvalfjord'           , 'bed'     , 'Bed frame'                           , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (31, 'NEIDEN'              , 'neiden'              , 'bed'     , 'Bed frame'                           , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (32, 'HEMMAHOS'            , 'hemmahos'            , 'bed'     , 'Children''s tent'                    , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (33, 'LÖVA'                , 'lova'                , 'bed'     , 'Bed canopy'                          , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (34, 'MINNEN'              , 'minnen'              , 'bed'     , 'Ext bed frame with slatted bed base' , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (35, 'SLÄKT'               , 'slakt'               , 'bed'     , 'Bed frame w/storage and slatted base', 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (36, 'VITVAL'              , 'vitval'              , 'bed'     , 'Lofted bed frame with desk top'      , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (37, 'TUFFING'             , 'tuffing'             , 'bed'     , 'Bunk bed frame'                      , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (38, 'NORDDAL'             , 'norddal'             , 'bed'     , 'Bunk bed frame'                      , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (39, 'MYDAL'               , 'mydal'               , 'bed'     , 'Bunk bed'                            , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (40, 'ALLEMANSRÄTTEN'      , 'allemansratten'      , 'food'    , 'Meatballs, frozen, 84% meat content' , 'ADD IMAGE');

INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (41, 'HAMNSKÄR'            , 'hamnskar'            , 'bathroom', 'Bronze faucet'                       , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (42, 'LILLSVAN'            , 'lillsvan'            , 'bathroom', 'Chrome plated faucet'                , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (43, 'VOXNAN'              , 'voxnan'              , 'bathroom', 'Tall chrome faucet'                  , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (44, 'RUNSKÄR'             , 'runskar'             , 'bathroom', 'Chrome faucet, two knobs'            , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (45, 'STOCKHOLM'           , 'stockholm'           , 'bathroom', 'Mirror, walnut veneer'               , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (46, 'ISFJORDEN'           , 'isfjorden'           , 'bathroom', 'Floor mirror'                        , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (47, 'KAITUM'              , 'kaitum'              , 'bathroom', 'Mirror with built-in light'          , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (48, 'IKORNNES'            , 'ikornnes'            , 'bathroom', 'Table mirror'                        , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (49, 'GODMORGON'           , 'godmorgon'           , 'bathroom', 'Box with lid'                        , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (50, 'SAXBORGA'            , 'saxborga'            , 'bathroom', 'Jar with lid and tray, set of 5'     , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (51, 'SKÅDIS'              , 'skadis'              , 'bathroom', 'Pegboard combination'                , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (52, 'LOCKIG'              , 'lockig'              , 'bathroom', 'Children''s potty'                   , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (53, 'SAXBORGA'            , 'saxborga'            , 'bathroom', 'Storage box with mirrored lid'       , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (54, 'LÅDDAN'              , 'laddan'              , 'bathroom', '6-piece storage board set'           , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (55, 'DOPPA'               , 'doppa'               , 'bathroom', 'Bathtub mat'                         , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (56, 'TISKEN'              , 'tisken'              , 'bathroom', 'Basket with suction cup'             , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (57, 'LILLÅNGEN'           , 'lillangen'           , 'bathroom', 'Sink'                                , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (58, 'GUTVIKEN'            , 'gutviken'            , 'bathroom', 'Countertop sink'                     , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (59, 'TÖRNVIKEN'           , 'tornviken'           , 'bathroom', 'Countertop sink'                     , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (60, 'ODENSVIK'            , 'odensvik'            , 'bathroom', 'Double-bowl sink'                    , 'ADD IMAGE');

INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (61, 'DUKTIG'              , 'duktig'              , 'toys'    , 'Kids cooking set'                    , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (62, 'LILLABO'             , 'lillabo'             , 'toys'    , 'Toy trainset'                        , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (63, 'STORABO'             , 'storabo'             , 'toys'    , 'Play carpet'                         , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (64, 'VURM'                , 'vurm'                , 'kitchen' , 'Wine rack'                           , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (65, 'KUNGSFORS'           , 'kungsfors'           , 'kitchen' , 'Dish drainer'                        , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (66, 'ORDNING'             , 'ordning'             , 'kitchen' , 'Utensil holder'                      , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (67, 'TORKAD'              , 'torkad'              , 'kitchen' , 'Paper towel holder'                  , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (68, 'IDEALISK'            , 'idealisk'            , 'kitchen' , 'Corkscrew'                           , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (69, 'JAMFORA'             , 'jamfora'             , 'kitchen' , '3-piece knife set'                   , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (70, 'ANDLIG'              , 'andlig'              , 'kitchen' , '3-piece knife set'                   , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (71, 'FÖRDUBBLA'           , 'fordubbla'           , 'kitchen' , '2-piece knife set'                   , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (72, 'FÖRSLAG'             , 'forslag'             , 'kitchen' , '3-piece knife set'                   , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (73, 'VÖRDA'               , 'vorda'               , 'kitchen' , '3-piece knife set'                   , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (74, 'DRAGON'              , 'dragon'              , 'kitchen' , '20-piece flatware set'               , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (75, 'MATLUST'             , 'matlust'             , 'kitchen' , 'Chopping board'                      , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (76, 'SKYDD'               , 'skydd'               , 'kitchen' , 'Wood treatment oil, indoor use'      , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (77, 'APTITLIG'            , 'aptitlig'            , 'kitchen' , 'Butcher block'                       , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (78, 'GRUNKA'              , 'grunka'              , 'kitchen' , '4-piece cooking utensil set'         , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (79, 'GUBBRÖRA'            , 'gubrora'             , 'kitchen' , 'Rubber spatula'                      , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (80, 'JÄMFÖRLIG'           , 'jamforlig'           , 'kitchen' , 'Handheld whisk'                      , 'ADD IMAGE');

INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (81, 'KÖTTBULLAR'          , 'kottbullar'          , 'food'    , 'Meatballs, frozen'                   , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (82, 'FANBYN'              , 'fanbyn'              , 'outdoor' , 'Bar table and 4 bar stools'          , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (83, 'FANBYN'              , 'fanbyn'              , 'outdoor' , 'Bar stool with backrest'             , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (84, 'FRÖSÖN / DUVHOLMEN'  , 'froson / duvholmen'  , 'outdoor' , 'Seat pad, outdoor'                   , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (85, 'ÄPPLARÖ'             , 'applaro'             , 'outdoor' , 'Drop-leaf table, outdoor'            , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (86, 'ÄPPLARÖ'             , 'applaro'             , 'outdoor' , 'Bench, outdoor'                      , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (87, 'ÄPPLARÖ'             , 'applaro'             , 'outdoor' , 'Chaise'                              , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (88, 'ÄPPLARÖ'             , 'applaro'             , 'outdoor' , 'Reclining chair, outdoor'            , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (89, 'FRÖSÖN / DUVHOLMEN'  , 'froson / duvholmen'  , 'outdoor' , 'Back cushion, outdoor'               , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (90, 'HAVSTEN'             , 'havsten'             , 'outdoor' , 'Loveseat, indoor/outdoor'            , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (91, 'BROMMÖ'              , 'brommo'              , 'outdoor' , 'Chaise, outdoor'                     , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (92, 'ÄPPLARÖ'             , 'applaro'             , 'outdoor' , 'Armchair, outdoor'                   , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (93, 'HÅLLÖ'               , 'hallo'               , 'outdoor' , 'Seat pad, outdoor'                   , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (94, 'SOLLERÖN'            , 'solleron'            , 'outdoor' , '3-seat modular sofa, outdoor'        , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (95, 'ÄPPLARÖ'             , 'applaron'            , 'outdoor' , 'Table and 2 benches'                 , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (96, 'TÄRNÖ'               , 'tarno'               , 'outdoor' , 'Chair, outdoor, foldable'            , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (97, 'TOSTERÖ'             , 'tostero'             , 'outdoor' , 'Cover for outdoor furniture, sofa'   , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (98, 'KLÖVEN'              , 'kloven'              , 'outdoor' , '4-seat conversion set, outdoor'      , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (99, 'SOLLERÖN'            , 'solleron'            , 'outdoor' , '4-seat conversion set, outdoor'      , 'ADD IMAGE');
INSERT INTO products (id, real_name, simple_name, category, description, image_address) VALUES (100, 'OTTERÖN / INNERSKÄR', 'otteron / innerskar' , 'outdoor' , 'Pouffe, indoor/outdoor'              , 'ADD IMAGE');