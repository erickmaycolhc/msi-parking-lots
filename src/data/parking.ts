const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "VIA", uid: "via", sortable: true },
  { name: "CUADRA", uid: "cuadra", sortable: true },
  { name: "ESTACIONAMIENTOS", uid: "estacionamiento", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const parkings = [
  {
    id: 1,
    via: "Av. Dos de Mayo",
    cuadra: "4, 5, 6, 7, 10, 12, 14, 15 y 16",
    estacionamiento: "82",
    blocks: [
      {
        name: "cuadra 4",
        cuadras: [
          { lat: -12.091075, lng: -77.036369 },
          { lat: -12.092542, lng: -77.03614 },
          { lat: -12.092644, lng: -77.036891 },
          { lat: -12.091175, lng: -77.03711 },
        ],
      },
      {
        name: "cuadra 5",
        cuadras: [
          { lat: -12.09118, lng: -77.037179 },
          { lat: -12.092662, lng: -77.03696 },
          { lat: -12.092755, lng: -77.037708 },
          { lat: -12.091279, lng: -77.037922 },
        ],
      },
      {
        name: "cuadra 6",
        cuadras: [
          { lat: -12.091272, lng: -77.037974 },
          { lat: -12.092774, lng: -77.037769 },
          { lat: -12.092874, lng: -77.038611 },
          { lat: -12.091413, lng: -77.038831 },
        ],
      },
      {
        name: "cuadra 7",
        cuadras: [
          { lat: -12.091429, lng: -77.038903 },
          { lat: -12.092887, lng: -77.038689 },
          { lat: -12.093, lng: -77.039494 },
          { lat: -12.091555, lng: -77.039705 },
        ],
      },
      {
        name: "cuadra 10",
        cuadras: [
          { lat: -12.09176, lng: -77.041412 },
          { lat: -12.093261, lng: -77.041169 },
          { lat: -12.093369, lng: -77.041952 },
          { lat: -12.091839, lng: -77.042162 },
        ],
      },
      {
        name: "cuadra 12",
        cuadras: [
          { lat: -12.091986, lng: -77.043054 },
          { lat: -12.093461, lng: -77.042828 },
          { lat: -12.093614, lng: -77.043877 },
          { lat: -12.092136, lng: -77.044094 },
        ],
      },
      {
        name: "cuadra 14",
        cuadras: [
          { lat: -12.0923, lng: -77.045303 },
          { lat: -12.093789, lng: -77.045099 },
          { lat: -12.093939, lng: -77.046169 },
          { lat: -12.092452, lng: -77.046357 },
        ],
      },
      {
        name: "cuadra 15",
        cuadras: [
          { lat: -12.092462, lng: -77.046435 },
          { lat: -12.093947, lng: -77.046255 },
          { lat: -12.094138, lng: -77.047307 },
          { lat: -12.092632, lng: -77.047463 },
        ],
      },
      {
        name: "cuadra 16",
        cuadras: [
          { lat: -12.092648, lng: -77.047571 },
          { lat: -12.094145, lng: -77.047352 },
          { lat: -12.094269, lng: -77.048401 },
          { lat: -12.09279, lng: -77.048618 },
        ],
      },
    ],
  },
  {
    id: 2,
    via: "Av. Guillermo Prescott",
    cuadra: "2",
    estacionamiento: "30",
    blocks: [
      {
        name: "cuadra 2",
        cuadras: [
          { lat: -12.089576, lng: -77.047968 },
          { lat: -12.091503, lng: -77.047726 },
          { lat: -12.091647, lng: -77.048787 },
          { lat: -12.089746, lng: -77.049071 },
        ],
      },
    ],
  },
  {
    id: 3,
    via: "Av. Nicolás de Ribera",
    cuadra: "3 a la 9",
    estacionamiento: "120",
    blocks: [
      {
        name: "cuadra 3",
        cuadras: [
          { lat: -12.096449, lng: -77.040721 },
          { lat: -12.097619, lng: -77.041291 },
          { lat: -12.096564, lng: -77.041455 },
        ],
      },
      {
        name: "cuadra 4",
        cuadras: [
          { lat: -12.096585, lng: -77.041507 },
          { lat: -12.097689, lng: -77.041334 },
          { lat: -12.097781, lng: -77.041387 },
          { lat: -12.097683, lng: -77.042153 },
          { lat: -12.096686, lng: -77.042286 },
        ],
      },
      {
        name: "cuadra 5",
        cuadras: [
          { lat: -12.096706, lng: -77.04234 },
          { lat: -12.097657, lng: -77.042221 },
          { lat: -12.097511, lng: -77.043254 },
          { lat: -12.097527, lng: -77.043324 },
          { lat: -12.096856, lng: -77.043387 },
        ],
      },
      {
        name: "cuadra 6",
        cuadras: [
          { lat: -12.096866, lng: -77.043464 },
          { lat: -12.097521, lng: -77.043394 },
          { lat: -12.097673, lng: -77.044419 },
          { lat: -12.097032, lng: -77.044507 },
        ],
      },
      {
        name: "cuadra 7",
        cuadras: [
          { lat: -12.09704, lng: -77.044588 },
          { lat: -12.09768, lng: -77.044507 },
          { lat: -12.097849, lng: -77.045609 },
          { lat: -12.097181, lng: -77.045687 },
        ],
      },
      {
        name: "cuadra 8",
        cuadras: [
          { lat: -12.097189, lng: -77.045765 },
          { lat: -12.097863, lng: -77.045695 },
          { lat: -12.097992, lng: -77.046719 },
          { lat: -12.09732, lng: -77.046792 },
        ],
      },
      {
        name: "cuadra 9",
        cuadras: [
          { lat: -12.097328, lng: -77.046902 },
          { lat: -12.098014, lng: -77.046837 },
          { lat: -12.098144, lng: -77.047791 },
          { lat: -12.097479, lng: -77.047918 },
        ],
      },
    ],
  },
  {
    id: 4,
    via: "Calle Burgos",
    cuadra: "1",
    estacionamiento: "14",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.089453, lng: -77.046905 },
          { lat: -12.09134, lng: -77.046611 },
          { lat: -12.091466, lng: -77.047598 },
          { lat: -12.089588, lng: -77.047877 },
        ],
      },
    ],
  },
  {
    id: 5,
    via: "Calle Carlos Porras Osores",
    cuadra: "2 y 3",
    estacionamiento: "42",
    blocks: [
      {
        name: "cuadra 2",
        cuadras: [
          { lat: -12.09295, lng: -77.04982 },
          { lat: -12.094437, lng: -77.049617 },
          { lat: -12.094573, lng: -77.050676 },
          { lat: -12.093108, lng: -77.050904 },
        ],
      },
      {
        name: "cuadra 3",
        cuadras: [
          { lat: -12.094698, lng: -77.049521 },
          { lat: -12.09618, lng: -77.049274 },
          { lat: -12.09631, lng: -77.050199 },
          { lat: -12.094805, lng: -77.050415 },
        ],
      },
    ],
  },
  {
    id: 6,
    via: "Calle Guillermo Marconi",
    cuadra: "1 y 4",
    estacionamiento: "46",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.091738, lng: -77.048856 },
          { lat: -12.092706, lng: -77.048724 },
          { lat: -12.092842, lng: -77.049743 },
          { lat: -12.091906, lng: -77.049891 },
        ],
      },
      {
        name: "cuadra 4",
        cuadras: [
          { lat: -12.08641, lng: -77.04962 },
          { lat: -12.087927, lng: -77.049393 },
          { lat: -12.088382, lng: -77.049688 },
          { lat: -12.088004, lng: -77.050483 },
        ],
      },
    ],
  },
  {
    id: 7,
    via: "Calle José Granda",
    cuadra: "2",
    estacionamiento: "13",
    blocks: [
      {
        name: "cuadra 2",
        cuadras: [
          { lat: -12.096212, lng: -77.04927 },
          { lat: -12.097203, lng: -77.04915 },
          { lat: -12.097321, lng: -77.050032 },
          { lat: -12.096342, lng: -77.050195 },
        ],
      },
    ],
  },
  {
    id: 8,
    via: "Calle Los Álamos",
    cuadra: "2",
    estacionamiento: "13",
    blocks: [
      {
        name: "cuadra 2",
        cuadras: [
          { lat: -12.091861, lng: -77.042243 },
          { lat: -12.093351, lng: -77.042044 },
          { lat: -12.09344, lng: -77.042736 },
          { lat: -12.091976, lng: -77.042973 },
        ],
      },
    ],
  },
  {
    id: 9,
    via: "Calle Los Castaños",
    cuadra: "5",
    estacionamiento: "47",
    blocks: [
      {
        name: "cuadra 5",
        cuadras: [
          { lat: -12.097107, lng: -77.048028 },
          { lat: -12.097437, lng: -77.047992 },
          { lat: -12.09782, lng: -77.048209 },
          { lat: -12.098308, lng: -77.048586 },

          { lat: -12.098357, lng: -77.048668 },
          { lat: -12.098367, lng: -77.048748 },
          { lat: -12.098362, lng: -77.048876 },
          { lat: -12.098327, lng: -77.049259 },

          { lat: -12.098415, lng: -77.049436 },
          { lat: -12.098725, lng: -77.049624 },
          { lat: -12.098807, lng: -77.049752 },
          { lat: -12.098864, lng: -77.049955 },

          { lat: -12.098865, lng: -77.050031 },
          { lat: -12.097441, lng: -77.050238 },
        ],
      },
    ],
  },
  {
    id: 10,
    via: "Calle Los Cedros",
    cuadra: "2 y 7",
    estacionamiento: "49",
    blocks: [
      {
        name: "cuadra 2",
        cuadras: [
          { lat: -12.091968, lng: -77.043038 },
          { lat: -12.093477, lng: -77.042829 },
          { lat: -12.093631, lng: -77.043878 },
          { lat: -12.092132, lng: -77.044094 },
        ],
      },
      {
        name: "cuadra 7",
        cuadras: [
          { lat: -12.098702, lng: -77.042006 },
          { lat: -12.09912, lng: -77.042451 },
          { lat: -12.099615, lng: -77.043168 },
          { lat: -12.099514, lng: -77.043699 },
          { lat: -12.0984, lng: -77.04344 },
        ],
      },
    ],
  },
  {
    id: 11,
    via: "Ca. Los Eucaliptos",
    cuadra: "2, 4 y 5",
    estacionamiento: "105",
    blocks: [
      {
        name: "cuadra 2",
        cuadras: [
          { lat: -12.092672, lng: -77.047587 },
          { lat: -12.094100960688682, lng: -77.04740398196073 },
          { lat: -12.094274405094188, lng: -77.04839781597477 },
          { lat: -12.092786204265538, lng: -77.04862154628427 },
        ],
      },

      {
        name: "cuadra 4",
        cuadras: [
          { lat: -12.096193586457257, lng: -77.04701499061004 },
          { lat: -12.097258928122084, lng: -77.04689021725797 },
          { lat: -12.097394729571548, lng: -77.04792547414425 },
          { lat: -12.097077389388113, lng: -77.04795631955622 },
          { lat: -12.096361405614825, lng: -77.04812798092813 },
        ],
      },

      {
        name: "cuadra 5",
        cuadras: [
          { lat: -12.097326, lng: -77.046895 },
          { lat: -12.098014, lng: -77.046827 },
          { lat: -12.098153, lng: -77.047797 },
          { lat: -12.097475, lng: -77.047926 },
        ],
      },
    ],
  },
  {
    id: 12,
    via: "Calle Los Laureles",
    cuadra: "1, 2 y 5",
    estacionamiento: "35",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.091581, lng: -77.045429 },
          { lat: -12.09223, lng: -77.045302 },
          { lat: -12.092391, lng: -77.046377 },
          { lat: -12.091702, lng: -77.046473 },
        ],
      },
      {
        name: "cuadra 2",
        cuadras: [
          { lat: -12.092304, lng: -77.045306 },
          { lat: -12.093797, lng: -77.045098 },
          { lat: -12.093942, lng: -77.046165 },
          { lat: -12.092456, lng: -77.046354 },
        ],
      },
      {
        name: "cuadra 5",
        cuadras: [
          { lat: -12.097041, lng: -77.044584 },
          { lat: -12.097681, lng: -77.044508 },
          { lat: -12.097848, lng: -77.045607 },
          { lat: -12.09718, lng: -77.045688 },
        ],
      },
    ],
  },
  {
    id: 13,
    via: "Calle Los Nogales",
    cuadra: "1, 3 y 4",
    estacionamiento: "48",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.091416, lng: -77.044272 },
          { lat: -12.092075, lng: -77.044185 },
          { lat: -12.09222, lng: -77.045241 },
          { lat: -12.091571, lng: -77.045366 },
        ],
      },
      {
        name: "cuadra 3",
        cuadras: [
          { lat: -12.093927, lng: -77.043909 },
          { lat: -12.095648, lng: -77.04364 },
          { lat: -12.09579, lng: -77.044688 },
          { lat: -12.094028839962581, lng: -77.04496227798651 },
        ],
      },
      {
        name: "cuadra 4",
        cuadras: [
          { lat: -12.095738, lng: -77.043623 },
          { lat: -12.096786, lng: -77.04348 },
          { lat: -12.096939, lng: -77.044507 },
          { lat: -12.095881, lng: -77.044672 },
        ],
      },
    ],
  },
  {
    id: 14,
    via: "Calle Los Robles",
    cuadra: "5",
    estacionamiento: "4",
    blocks: [
      {
        name: "cuadra 5",
        cuadras: [
          { lat: -12.096709, lng: -77.042346 },
          { lat: -12.09765, lng: -77.042224 },
          { lat: -12.097507, lng: -77.043259 },
          { lat: -12.097523, lng: -77.043321 },
          { lat: -12.096848, lng: -77.043401 },
        ],
      },
    ],
  },
  {
    id: 15,
    via: "Calle Manuel Ugarte y Moscoso",
    cuadra: "3 y 4",
    estacionamiento: "9",
    blocks: [
      {
        name: "cuadra 3",
        cuadras: [
          { lat: -12.094847, lng: -77.055445 },
          { lat: -12.095537, lng: -77.055805 },
          { lat: -12.095144, lng: -77.05662 },
          { lat: -12.094423, lng: -77.056322 },
        ],
      },
      {
        name: "cuadra 4",
        cuadras: [
          { lat: -12.095596, lng: -77.055843 },
          { lat: -12.096468, lng: -77.056278 },
          { lat: -12.096076, lng: -77.057097 },
          { lat: -12.095207, lng: -77.05664 },
        ],
      },
    ],
  },
  {
    id: 16,
    via: "Calle Parque Javier Prado",
    cuadra: "1",
    estacionamiento: "18",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.094538, lng: -77.048432 },
          { lat: -12.095961, lng: -77.048254 },
          { lat: -12.096087, lng: -77.049223 },
          { lat: -12.094653, lng: -77.049464 },
        ],
      },
    ],
  },
  {
    id: 17,
    via: "Calle Torres Matos",
    cuadra: "1",
    estacionamiento: "10",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.095118, lng: -77.058399 },
          { lat: -12.096314, lng: -77.058856 },
          { lat: -12.096005, lng: -77.059577 },
          { lat: -12.09486, lng: -77.05941 },
        ],
      },
    ],
  },
  {
    id: 18,
    via: "Av. Alayza y Paz Soldán (Av. Gral. Córdova)",
    cuadra: "11",
    estacionamiento: "47",
    blocks: [
      {
        name: "cuadra 11",
        cuadras: [
          { lat: -12.108321, lng: -77.049366 },
          { lat: -12.110188789554675, lng: -77.05132774194507 },
          { lat: -12.107777, lng: -77.053724 },
          { lat: -12.106942, lng: -77.052853 },
          { lat: -12.106622, lng: -77.052594 },
          { lat: -12.106362, lng: -77.052412 },
        ],
      },
    ],
  },
  {
    id: 19,
    via: "Av. Álvarez Calderón",
    cuadra: "2 y 7",
    estacionamiento: "70",
    blocks: [
      {
        name: "cuadra 2",
        cuadras: [
          { lat: -12.104431, lng: -77.039995 },
          { lat: -12.105354, lng: -77.040199 },
          { lat: -12.105044, lng: -77.041798 },
          { lat: -12.104074, lng: -77.041568 },
        ],
      },
      {
        name: "cuadra 7",
        cuadras: [
          { lat: -12.103152, lng: -77.04565 },
          { lat: -12.104098, lng: -77.045887 },
          { lat: -12.104095, lng: -77.04596 },
          { lat: -12.103985, lng: -77.046085 },
          { lat: -12.103004, lng: -77.046724 },
          { lat: -12.102873, lng: -77.046605 },
          { lat: -12.10288, lng: -77.046414 },
        ],
      },
    ],
  },
  {
    id: 20,
    via: "Av. Augusto Pérez Araníbar (Av. Del Ejército)",
    cuadra: "17",
    estacionamiento: "18",
    blocks: [
      {
        name: "cuadra 17",
        cuadras: [
          { lat: -12.106461, lng: -77.053828 },
          { lat: -12.107007, lng: -77.054369 },
          { lat: -12.10623, lng: -77.055152 },
          { lat: -12.105657, lng: -77.054755 },
        ],
      },
    ],
  },
  {
    id: 21,
    via: "Av. Aurelio Miroquesada",
    cuadra: "1 a la 8",
    estacionamiento: "161",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.099896, lng: -77.037822 },
          { lat: -12.10057, lng: -77.038043 },
          { lat: -12.100536, lng: -77.038186 },
          { lat: -12.100518, lng: -77.038318 },
          { lat: -12.100518, lng: -77.03839 },
          { lat: -12.100114, lng: -77.04039 },
          { lat: -12.099253, lng: -77.039722 },
        ],
      },
      {
        name: "cuadra 2",
        cuadras: [
          { lat: -12.099205, lng: -77.039909 },
          { lat: -12.1001, lng: -77.040657 },
          { lat: -12.09967, lng: -77.042886 },
          { lat: -12.099313, lng: -77.042379 },
          { lat: -12.099079843610166, lng: -77.04212248983191 },
          { lat: -12.098743, lng: -77.041813 },
        ],
      },
      {
        name: "cuadra 3",
        cuadras: [
          { lat: -12.098701, lng: -77.042001 },
          { lat: -12.098928, lng: -77.042207 },
          { lat: -12.099155, lng: -77.042472 },
          { lat: -12.099345, lng: -77.042717 },
          { lat: -12.099631, lng: -77.043174 },
          { lat: -12.099541, lng: -77.043736 },
          { lat: -12.098383, lng: -77.043454 },
        ],
      },
      {
        name: "cuadra 4",
        cuadras: [
          { lat: -12.098389, lng: -77.043521 },
          { lat: -12.099494, lng: -77.043788 },
          { lat: -12.09931, lng: -77.044749 },
          { lat: -12.098208, lng: -77.044522 },
        ],
      },
      {
        name: "cuadra 5",
        cuadras: [
          { lat: -12.098198, lng: -77.044599 },
          { lat: -12.099294, lng: -77.044829 },
          { lat: -12.099136, lng: -77.045947 },
          { lat: -12.098011, lng: -77.045639 },
        ],
      },
      {
        name: "cuadra 6",
        cuadras: [
          { lat: -12.097926, lng: -77.045677 },
          { lat: -12.09911, lng: -77.046028 },
          { lat: -12.098904, lng: -77.046887 },
          { lat: -12.098074, lng: -77.046729 },
        ],
      },
      {
        name: "cuadra 7",
        cuadras: [
          { lat: -12.098079, lng: -77.046823 },
          { lat: -12.098897, lng: -77.046985 },
          { lat: -12.098785, lng: -77.047685 },
          { lat: -12.098218, lng: -77.047799 },
        ],
      },
      {
        name: "cuadra 8",
        cuadras: [
          { lat: -12.097116, lng: -77.048033 },
          { lat: -12.098779, lng: -77.047749 },
          { lat: -12.098639, lng: -77.048497 },
          { lat: -12.098443, lng: -77.049376 },
          { lat: -12.098467, lng: -77.049488 },
          { lat: -12.098688, lng: -77.049602 },
          { lat: -12.09878, lng: -77.049698 },
          { lat: -12.098848, lng: -77.049874 },
          { lat: -12.098862, lng: -77.049954 },
          { lat: -12.098863, lng: -77.050034 },
          { lat: -12.097432, lng: -77.050248 },
        ],
      },
    ],
  },
  {
    id: 22,
    via: "Av. Miguel Dasso",
    cuadra: "1 y 2",
    estacionamiento: "74",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.106097, lng: -77.040414 },
          { lat: -12.107079, lng: -77.04021 },
          { lat: -12.107809, lng: -77.040963 },
          { lat: -12.107635, lng: -77.041091 },
          { lat: -12.107537, lng: -77.041074 },
          { lat: -12.107192, lng: -77.041101 },
          { lat: -12.106769, lng: -77.04131 },
          { lat: -12.106574, lng: -77.041558 },
          { lat: -12.106491, lng: -77.041705 },
          { lat: -12.106364, lng: -77.042091 },
          { lat: -12.105763, lng: -77.041988 },
        ],
      },
      {
        name: "cuadra 2",
        cuadras: [
          { lat: -12.107122, lng: -77.04018 },
          { lat: -12.107589, lng: -77.039694 },
          { lat: -12.108325, lng: -77.040455 },
          { lat: -12.107845, lng: -77.040932 },
        ],
      },
    ],
  },
  {
    id: 23,
    via: "Calle Carlos Concha",
    cuadra: "1",
    estacionamiento: "5",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.103799, lng: -77.056425 },
          { lat: -12.104531, lng: -77.056696 },
          { lat: -12.103766, lng: -77.057417 },
          { lat: -12.103286, lng: -77.057156 },
        ],
      },
    ],
  },
  {
    id: 24,
    via: "Calle Juan Dellepiani",
    cuadra: "3 y 5",
    estacionamiento: "57",
    blocks: [
      {
        name: "cuadra 3",
        cuadras: [
          { lat: -12.100923, lng: -77.055129 },
          { lat: -12.102155, lng: -77.055385 },
          { lat: -12.101698, lng: -77.056351 },
          { lat: -12.100596, lng: -77.055799 },
        ],
      },
      {
        name: "cuadra 5",
        cuadras: [
          { lat: -12.10319, lng: -77.055579 },
          { lat: -12.104125, lng: -77.055757 },
          { lat: -12.103241, lng: -77.057123 },
          { lat: -12.102602, lng: -77.056817 },
        ],
      },
    ],
  },
  {
    id: 25,
    via: "Calle Leónidas Yerovi",
    cuadra: "1",
    estacionamiento: "7",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.105457, lng: -77.040206 },
          { lat: -12.1059, lng: -77.040301 },
          { lat: -12.106029, lng: -77.040405 },
          { lat: -12.105703, lng: -77.041957 },
          { lat: -12.105131, lng: -77.041813 },
        ],
      },
    ],
  },
  {
    id: 26,
    via: "Calle Víctor Maurtua",
    cuadra: "1",
    estacionamiento: "7",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.107135, lng: -77.040178 },
          { lat: -12.107588, lng: -77.039707 },
          { lat: -12.108306, lng: -77.040455 },
          { lat: -12.107847, lng: -77.040917 },
        ],
      },
    ],
  },
  {
    id: 27,
    via: "Psje. NN63",
    cuadra: "1",
    estacionamiento: "12",
  },
  {
    id: 28,
    via: "Psje. NN64",
    cuadra: "1",
    estacionamiento: "12",
  },
  {
    id: 29,
    via: "Psje. NN65",
    cuadra: "1",
    estacionamiento: "12",
  },
  {
    id: 30,
    via: "Psje. NN68",
    cuadra: "1",
    estacionamiento: "12",
  },
  {
    id: 31,
    via: "Av. Camino Real",
    cuadra: "1 y 12",
    estacionamiento: "25",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.094314, lng: -77.033978 },
          { lat: -12.095575, lng: -77.034887 },
          { lat: -12.095441, lng: -77.035297 },
          { lat: -12.094071, lng: -77.034859 },
        ],
      },
      {
        name: "cuadra 12",
        cuadras: [
          { lat: -12.106298, lng: -77.038941 },
          { lat: -12.106343, lng: -77.038924 },
          { lat: -12.106486, lng: -77.038859 },
          { lat: -12.10677, lng: -77.038609 },
          { lat: -12.107082, lng: -77.038976 },
          { lat: -12.10716, lng: -77.039145 },
          { lat: -12.107177, lng: -77.039252 },
          { lat: -12.10718, lng: -77.039499 },
          { lat: -12.10627, lng: -77.039231 },
        ],
      },
    ],
  },
  {
    id: 32,
    via: "Av. Daniel Hernández",
    cuadra: "1",
    estacionamiento: "5",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.09362, lng: -77.033593 },
          { lat: -12.094169888123364, lng: -77.03364772957343 },
          { lat: -12.094201, lng: -77.033754 },
          { lat: -12.094231, lng: -77.03385 },
          { lat: -12.094263, lng: -77.033902 },
          { lat: -12.094088, lng: -77.034485 },
          { lat: -12.093896, lng: -77.034432 },
          { lat: -12.093784, lng: -77.034381 },
          { lat: -12.093747, lng: -77.034351 },
          { lat: -12.09359, lng: -77.033816 },
        ],
      },
    ],
  },
  {
    id: 33,
    via: "Av. Emilio Cavenecia",
    cuadra: "2",
    estacionamiento: "19",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.109004, lng: -77.038298 },
          { lat: -12.109727, lng: -77.039039 },
          { lat: -12.109054, lng: -77.039706 },
          { lat: -12.108334, lng: -77.038954 },
        ],
      },
    ],
  },
  {
    id: 34,
    via: "Av. Felipe Pardo y Aliaga",
    cuadra: "2, 3, 4, 5 y 6",
    estacionamiento: "54",
  },
  {
    id: 35,
    via: "Av. Jorge Basadre Grohmann",
    cuadra: "1, 2 y 5",
    estacionamiento: "26",
  },
  {
    id: 36,
    via: "Av. Los Conquistadores",
    cuadra: "1 a la 12",
    estacionamiento: "183",
  },
  {
    id: 37,
    via: "Av. Santa Cruz",
    cuadra: "5",
    estacionamiento: "34",
  },
  {
    id: 38,
    via: "Calle Alférez Alfredo Salazar",
    cuadra: "3",
    estacionamiento: "10",
  },
  {
    id: 39,
    via: "Calle Almirante Lord Cochrane",
    cuadra: "2",
    estacionamiento: "15",
  },
  {
    id: 40,
    via: "Calle Catalina Huanca",
    cuadra: "1",
    estacionamiento: "2",
  },
  {
    id: 41,
    via: "Calle Choquehuanca",
    cuadra: "6",
    estacionamiento: "4",
  },
  {
    id: 42,
    via: "Calle Esquilache",
    cuadra: "3",
    estacionamiento: "12",
  },
  {
    id: 43,
    via: "Calle José del Llano Zapata",
    cuadra: "2",
    estacionamiento: "16",
  },
  {
    id: 44,
    via: "Calle Juan Cavero",
    cuadra: "1",
    estacionamiento: "6",
  },
  {
    id: 45,
    via: "Calle Las Palmas",
    cuadra: "2",
    estacionamiento: "15",
  },
  {
    id: 46,
    via: "Calle Lizardo Alzamora Este",
    cuadra: "4",
    estacionamiento: "19",
  },
  {
    id: 47,
    via: "Calle Machaypuito",
    cuadra: "1",
    estacionamiento: "5",
  },
  {
    id: 48,
    via: "Calle Manuel Bañon",
    cuadra: "1 y 2",
    estacionamiento: "19",
  },
  {
    id: 49,
    via: "Calle Pallardelli",
    cuadra: "1",
    estacionamiento: "12",
  },
  {
    id: 50,
    via: "Calle pancho Fierro",
    cuadra: "1",
    estacionamiento: "4",
  },
  {
    id: 51,
    via: "Calle Santa Luisa",
    cuadra: "1 y 2",
    estacionamiento: "17",
  },
  {
    id: 52,
    via: "Av. Andrés Aramburú",
    cuadra: "4",
    estacionamiento: "8",
  },
  {
    id: 53,
    via: "Av. Del Parque",
    cuadra: "2",
    estacionamiento: "12",
  },
  {
    id: 54,
    via: "Av. Javier Prado Este",
    cuadra: "2 y 3",
    estacionamiento: "29",
  },
  {
    id: 55,
    via: "Av. Paseo de la República (Vía auxiliar)",
    cuadra: "30, 35 y 38",
    estacionamiento: "53",
  },
  {
    id: 56,
    via: "Av. República de Colombia",
    cuadra: "1",
    estacionamiento: "34",
  },
  {
    id: 57,
    via: "Calle Antequera",
    cuadra: "1 y 2",
    estacionamiento: "11",
  },
  {
    id: 58,
    via: "Calle Chacarilla",
    cuadra: "5 y 6",
    estacionamiento: "19",
  },
  {
    id: 59,
    via: "Calle Chinchón",
    cuadra: "9",
    estacionamiento: "8",
  },
  {
    id: 60,
    via: "Calle Coronel Andrés Reyes",
    cuadra: "2",
    estacionamiento: "11",
    blocks: [
      {
        name: "cuadra 2",
        cuadras: [
          { lat: -12.0944780874446, lng: -77.02979947916009 },
          { lat: -12.094382359854913, lng: -77.0290846704729 },
          { lat: -12.095034093597063, lng: -77.02899615757623 },
          { lat: -12.095144245622453, lng: -77.02969755521839 },
        ],
      },
    ],
  },
  {
    id: 61,
    via: "Calle Flamencos",
    cuadra: "1",
    estacionamiento: "20",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.09926425202068, lng: -77.02063954369711 },
          { lat: -12.099341249836614, lng: -77.02060857572785 },
          { lat: -12.099057482494125, lng: -77.01995028521277 },
          { lat: -12.099011629815989, lng: -77.01997152039068 },
        ],
      },
    ],
  },
  {
    id: 62,
    via: "Calle Las Camelias",
    cuadra: "2 y 3",
    estacionamiento: "19",
    blocks: [
      {
        name: "cuadra 2",
        cuadras: [
          { lat: -12.092872432423588, lng: -77.02936703460432 },
          { lat: -12.09347195479896, lng: -77.02924379263956 },
          { lat: -12.093658740390024, lng: -77.03054707641684 },
          { lat: -12.093023066312675, lng: -77.03036221346972 },
        ],
      },

      {
        name: "cuadra 3",
        cuadras: [
          { lat: -12.093587322636685, lng: -77.02921423101722 },
          { lat: -12.094312195442122, lng: -77.02908858191252 },
          { lat: -12.094397009364524, lng: -77.02980531511533 },
          { lat: -12.09366501950554, lng: -77.0299244821335 },
        ],
      },
    ],
  },
  {
    id: 63,
    via: "Ca. Las Casas",
    cuadra: "0",
    estacionamiento: "10",
    blocks: [
      {
        name: "cuadra 0",
        cuadras: [
          { lat: -12.094718482682419, lng: -77.03239195411075 },
          { lat: -12.094269596270161, lng: -77.03197139088866 },
          { lat: -12.093469733035352, lng: -77.03208384919812 },
          { lat: -12.09356161951635, lng: -77.03259530337297 },
          { lat: -12.09381920276195, lng: -77.03298659662723 },
          { lat: -12.094557305431875, lng: -77.03284948993597 },
        ],
      },
    ],
  },
  {
    id: 64,
    via: "Calle Manuel Gonzales Olaechea",
    cuadra: "4",
    estacionamiento: "5",
    blocks: [
      {
        name: "cuadra 4",
        cuadras: [
          { lat: -12.102609008640266, lng: -77.02630869654274 },
          { lat: -12.102677952427607, lng: -77.02682093716572 },
          { lat: -12.102548438235447, lng: -77.02696600509991 },
          { lat: -12.102365949364618, lng: -77.02695574823676 },
          { lat: -12.10138464676054, lng: -77.02672425014002 },
          { lat: -12.101031906041348, lng: -77.02657136419909 },
          { lat: -12.101211554715837, lng: -77.02601480577147 },
        ],
      },
    ],
  },
  {
    id: 65,
    via: "Calle Río de la Plata",
    cuadra: "1",
    estacionamiento: "5",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.10062253297803, lng: -77.03190213680496 },
          { lat: -12.100479434847074, lng: -77.03100863249087 },
          { lat: -12.099588703341803, lng: -77.03115817994325 },
          { lat: -12.09974395587496, lng: -77.0320361394349 },
        ],
      },
    ],
  },
  {
    id: 66,
    via: "Calle Virrey Toledo",
    cuadra: "4",
    estacionamiento: "4",
    blocks: [
      {
        name: "cuadra 4",
        cuadras: [
          { lat: -12.094035565134213, lng: -77.03139805082722 },
          { lat: -12.094050405761372, lng: -77.03190241052374 },
          { lat: -12.093445608059227, lng: -77.03199299063192 },
          { lat: -12.093365696799644, lng: -77.03156335090094 },
        ],
      },
    ],
  },
  {
    id: 67,
    via: "Av. Canaval y Moreyra",
    cuadra: "5",
    estacionamiento: "5",
    blocks: [
      {
        name: "cuadra 5",
        cuadras: [
          { lat: -12.098398335517006, lng: -77.01871998924717 },
          { lat: -12.09808468530505, lng: -77.01856767050232 },
          { lat: -12.097812380967055, lng: -77.01848891053591 },
          { lat: -12.097609028827883, lng: -77.02001711099601 },

          { lat: -12.098406706310834, lng: -77.01968866133424 },
          { lat: -12.098340392368785, lng: -77.01909472456506 },
        ],
      },
    ],
  },
  {
    id: 68,
    via: "Av. Del Parque Sur (altura de la Ca. 3 Sur)",
    cuadra: "1",
    estacionamiento: "56",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.102195244970304, lng: -77.01642893506504 },
          { lat: -12.102143875130498, lng: -77.01640908757746 },
          { lat: -12.102155290651307, lng: -77.01627482516153 },
          { lat: -12.101933829460501, lng: -77.01625147517615 },
          { lat: -12.101905290633908, lng: -77.01633436762425 },
          { lat: -12.101575381572015, lng: -77.01629117015159 },
          { lat: -12.101640528320509, lng: -77.01590783485348 },
          { lat: -12.1017101631268, lng: -77.01569184747086 },
          { lat: -12.10187446869284, lng: -77.01532448074325 },
          { lat: -12.102432213383652, lng: -77.01559617174702 },
          { lat: -12.10231919982324, lng: -77.01590088905621 },
          { lat: -12.102205044663208, lng: -77.01586236158035 },
          { lat: -12.102177647417534, lng: -77.01592657404014 },
          { lat: -12.102291802589283, lng: -77.01597911150725 },
        ],
      },
    ],
  },
  {
    id: 69,
    via: "Av. Guardia Civil",
    cuadra: "7",
    estacionamiento: "8",
    blocks: [
      {
        name: "cuadra 7",
        cuadras: [
          { lat: -12.098647052862235, lng: -77.01126595043839 },
          { lat: -12.098570231208583, lng: -77.01187291708973 },
          { lat: -12.098415978960995, lng: -77.01187018000482 },
          { lat: -12.097850583178449, lng: -77.01174440118872 },
          { lat: -12.09664872868728, lng: -77.01122109289818 },
          { lat: -12.096922878409092, lng: -77.01065726094136 },
          { lat: -12.09746030216271, lng: -77.01090763340979 },
          { lat: -12.097885835368228, lng: -77.01107555059326 },
          { lat: -12.097742602691246, lng: -77.01219000089333 },
          { lat: -12.098315752759866, lng: -77.0112071908272 },
        ],
      },
    ],
  },
  {
    id: 70,
    via: "Av. José Gálvez Barrenechea",
    cuadra: "5",
    estacionamiento: "16",
    blocks: [
      {
        name: "cuadra 5",
        cuadras: [
          { lat: -12.097764661384234, lng: -77.01235857188188 },
          { lat: -12.096969624031491, lng: -77.01259436908636 },
          { lat: -12.095944810081988, lng: -77.01277488274813 },
          { lat: -12.095787892148941, lng: -77.01206007592664 },
          { lat: -12.096170666406312, lng: -77.01188060605321 },
          { lat: -12.09635718529803, lng: -77.01170728716924 },
          { lat: -12.096530704947636, lng: -77.01146211227508 },
          { lat: -12.096999438898635, lng: -77.0116821386236 },
          { lat: -12.097557668113723, lng: -77.01199035848772 },
        ],
      },
    ],
  },
  {
    id: 71,
    via: "Av. República de Panamá (Vía Auxiliar)",
    cuadra: "29 a la 36",
    estacionamiento: "368",
    blocks: [
      {
        name: "cuadra 36",
        cuadras: [
          { lat: -12.101853034152997, lng: -77.01844492609987 },
          { lat: -12.101730237844519, lng: -77.0185650700002 },
          { lat: -12.10150584813322, lng: -77.01860584707558 },
          { lat: -12.100800464857167, lng: -77.01878207341022 },
          { lat: -12.10021604797681, lng: -77.01899746983327 },
          { lat: -12.099975664815075, lng: -77.01841330571305 },
          { lat: -12.101268169510002, lng: -77.01769620288489 },
          { lat: -12.101620596200767, lng: -77.01757658905989 },
          { lat: -12.10198705708983, lng: -77.01756223540087 },
        ],
      },
      {
        name: "cuadra 35",
        cuadras: [
          { lat: -12.100114763839498, lng: -77.01903351869585 },
          { lat: -12.098516201152483, lng: -77.01965950388104 },
          { lat: -12.09845456925764, lng: -77.0193497087441 },
          { lat: -12.098442767403808, lng: -77.01910696883162 },
          { lat: -12.098493908766626, lng: -77.01874621172412 },
          { lat: -12.098617172530066, lng: -77.01875694055344 },
          { lat: -12.09884140751733, lng: -77.01876364607588 },
          { lat: -12.099351508637538, lng: -77.01866708655085 },
          { lat: -12.099889146293995, lng: -77.01846457977257 },
        ],
      },
      {
        name: "cuadra 34",
        cuadras: [
          { lat: -12.098465124436604, lng: -77.01971365246372 },
          { lat: -12.098304503353843, lng: -77.01979259758824 },
          { lat: -12.098297485925698, lng: -77.01976070056821 },
          { lat: -12.09757504321631, lng: -77.02004954271966 },
          { lat: -12.097702471829393, lng: -77.0194002705591 },
          { lat: -12.097789830664851, lng: -77.01846009250065 },
          { lat: -12.098094699345738, lng: -77.01854142990324 },
          { lat: -12.098260778556837, lng: -77.01863632353799 },
          { lat: -12.098414382240792, lng: -77.018695333025 },
        ],
      },
      {
        name: "cuadra 33", //diners club
        cuadras: [
          // diners
          { lat: -12.09729799874685, lng: -77.02014047554694 },
          { lat: -12.097068761802303, lng: -77.02022340779895 },
          { lat: -12.096708531920859, lng: -77.0195982262069 },
          { lat: -12.096929971994678, lng: -77.01841963131135 },
          { lat: -12.097525676064448, lng: -77.01845471803334 },
        ],
      },
      {
        name: "cuadra 32", //honda
        cuadras: [
          { lat: -12.097032905315519, lng: -77.0202532330736 },
          { lat: -12.096554271613579, lng: -77.02044366991103 },
          { lat: -12.096307742137501, lng: -77.01986163056276 },
          { lat: -12.09655427161148, lng: -77.01975970662161 },
          { lat: -12.096678847588999, lng: -77.01966180599393 },
          { lat: -12.096888659630435, lng: -77.01990320480192 },
        ],
      },
      {
        name: "cuadra 31", // hasta golden club
        cuadras: [
          { lat: -12.096481935387, lng: -77.02046507312662 },
          { lat: -12.095154112908226, lng: -77.02100750305969 },
          { lat: -12.094933426683268, lng: -77.02044041721912 },
          { lat: -12.096257541271395, lng: -77.01988850424289 },
        ],
      },
      {
        name: "cuadra 30",
        cuadras: [
          { lat: -12.095051480555169, lng: -77.02104050992864 },
          { lat: -12.094615671294248, lng: -77.0212396537851 },
          { lat: -12.094120516931563, lng: -77.0200959990666 },
          { lat: -12.094604544240001, lng: -77.01988547556121 },
        ],
      },
      {
        name: "cuadra 29",
        cuadras: [
          { lat: -12.094496982679928, lng: -77.02127379273249 },
          { lat: -12.09308186442566, lng: -77.02183783763518 },
          { lat: -12.092918666647364, lng: -77.02059366268436 },
          { lat: -12.09318571750653, lng: -77.02057279998843 },
          { lat: -12.093317388317748, lng: -77.02051969496152 },
          { lat: -12.093564039105576, lng: -77.02031106805835 },
          { lat: -12.094053027463511, lng: -77.02012972326466 },
        ],
      },
    ],
  },
  {
    id: 72,
    via: "Calle 6",
    cuadra: "2",
    estacionamiento: "5",
    blocks: [
      {
        name: "cuadra 2",
        cuadras: [
          { lat: -12.092116763851994, lng: -77.00988411899387 },
          { lat: -12.090921351175691, lng: -77.00921593114535 },
          { lat: -12.091247753992489, lng: -77.00856635868661 },
          { lat: -12.092538574277567, lng: -77.00927323179953 },
        ],
      },
    ],
  },
  {
    id: 73,
    via: "Calle 17",
    cuadra: "2",
    estacionamiento: "11",
    blocks: [
      {
        name: "cuadra 2",
        cuadras: [
          { lat: -12.094879939783532, lng: -77.0176994823376 },
          { lat: -12.094814104770832, lng: -77.01716748374963 },
          { lat: -12.095181297029091, lng: -77.01716843205372 },
          { lat: -12.09562545063403, lng: -77.01731921240193 },
          { lat: -12.095667886018887, lng: -77.01759465173652 },
        ],
      },
    ],
  },
  {
    id: 74,
    via: "Calle 21",
    cuadra: "9",
    estacionamiento: "8",
    blocks: [
      {
        name: "cuadra 9",
        cuadras: [
          { lat: -12.09735435456094, lng: -77.01359607833278 },
          { lat: -12.09720692256386, lng: -77.01283648676069 },
          { lat: -12.097721531681653, lng: -77.01277890790078 },
          { lat: -12.098427249057544, lng: -77.01286461537792 },
          { lat: -12.098328292787123, lng: -77.0136166031665 },
        ],
      },
    ],
  },
  {
    id: 75,
    via: "Calle 24",
    cuadra: "2",
    estacionamiento: "11",
    blocks: [
      {
        name: "cuadra 2",
        cuadras: [
          { lat: -12.107422866859004, lng: -77.01145063887625 },
          { lat: -12.107027766869935, lng: -77.01153233998909 },
          { lat: -12.107137258309207, lng: -77.01213650756506 },
          { lat: -12.107535655135115, lng: -77.01206057531455 },
        ],
      },
    ],
  },
  {
    id: 76,
    via: "Calle 25",
    cuadra: "1 y 2",
    estacionamiento: "10",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.107521893513638, lng: -77.0120544793601 },
          { lat: -12.107136241701731, lng: -77.01213007753215 },
          { lat: -12.107032329868282, lng: -77.01153843966392 },
          { lat: -12.107414768066185, lng: -77.01146503274322 },
        ],
      },
      {
        name: "cuadra 2",
        cuadras: [
          { lat: -12.107104104019719, lng: -77.01213446003587 },
          { lat: -12.106868938932392, lng: -77.01218508285305 },
          { lat: -12.106768047513611, lng: -77.01159820984279 },
          { lat: -12.106992350705324, lng: -77.01154477399571 },
        ],
      },
    ],
  },
  {
    id: 77,
    via: "Calle 26",
    cuadra: "1",
    estacionamiento: "7",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.106398600861807, lng: -77.01373922820822 },
          { lat: -12.106411723438985, lng: -77.01381346743842 },
          { lat: -12.105682906154122, lng: -77.01368828941318 },
          { lat: -12.105768912995455, lng: -77.01343793336268 },
          { lat: -12.105610131112787, lng: -77.0124759796996 },
          { lat: -12.106173585838624, lng: -77.01236320670388 },
        ],
      },
    ],
  },
  {
    id: 78,
    via: "Calle 29",
    cuadra: "1",
    estacionamiento: "11",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.106434154930168, lng: -77.01384482082321 },
          { lat: -12.106560464762708, lng: -77.01458323683761 },
          { lat: -12.106471580072249, lng: -77.01488306882564 },
          { lat: -12.10489586804084, lng: -77.01401063243031 },
          { lat: -12.10592316363554, lng: -77.01390341553954 },
          { lat: -12.10642015056199, lng: -77.01387496641824 },
        ],
      },
    ],
  },
  {
    id: 79,
    via: " Calle 33",
    cuadra: "2",
    estacionamiento: "7",
    blocks: [
      {
        name: "cuadra 2",
        cuadras: [
          { lat: -12.104855744750362, lng: -77.01402305768687 },
          { lat: -12.104940649202954, lng: -77.01377270163638 },
          { lat: -12.10500680849795, lng: -77.01341521123994 },
          { lat: -12.105915639069885, lng: -77.01390129612184 },
          { lat: -12.106428895099492, lng: -77.01384926955255 },
          { lat: -12.106554996107867, lng: -77.01455860100316 },
          { lat: -12.106463254942023, lng: -77.01486678152912 },
        ],
      },
    ],
  },
  {
    id: 80,
    via: "Calle 41",
    cuadra: "9",
    estacionamiento: "9",
    blocks: [
      {
        name: "cuadra 9",
        cuadras: [
          { lat: -12.099750463039275, lng: -77.01320994195682 },
          { lat: -12.099461970179814, lng: -77.01388775363186 },
          { lat: -12.100445370552444, lng: -77.01439019260924 },
          { lat: -12.100765050634196, lng: -77.01372354489116 },
        ],
      },
    ],
  },
  {
    id: 81,
    via: "Calle Carlos Enrique Ferreyros",
    cuadra: "4 y 8",
    estacionamiento: "50",
    blocks: [
      {
        name: "cuadra 4",
        cuadras: [
          { lat: -12.090160455749436, lng: -77.01235768504316 },
          { lat: -12.089604439490303, lng: -77.01243144579004 },
          { lat: -12.089422160323624, lng: -77.01110777565953 },
          { lat: -12.089989979189067, lng: -77.01103669712161 },
        ],
      },
      {
        name: "cuadra 8",
        cuadras: [
          { lat: -12.093438586141248, lng: -77.01330293036845 },
          { lat: -12.093302206573275, lng: -77.01261360266118 },
          { lat: -12.094658131109114, lng: -77.01234806397237 },
          { lat: -12.094799755325548, lng: -77.01299715854499 },
        ],
      },
    ],
  },
  {
    id: 82,
    via: "Calle Los Petirrojos",
    cuadra: "3",
    estacionamiento: "55",
    blocks: [
      {
        name: "cuadra 3",
        cuadras: [
          { lat: -12.094736340283166, lng: -77.01711090635106 },
          { lat: -12.093788386528958, lng: -77.01727425291443 },
          { lat: -12.093715713608109, lng: -77.01677446152435 },
          { lat: -12.094661208397289, lng: -77.01665394838204 },
        ],
      },
    ],
  },
  {
    id: 83,
    via: "Calle Mejía Baca",
    cuadra: "1",
    estacionamiento: "7",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.0948289156676, lng: -77.01302154652217 },
          { lat: -12.09342739639249, lng: -77.01332439994545 },
          { lat: -12.09329363950356, lng: -77.0126069090439 },
          { lat: -12.094676645313275, lng: -77.012329199679 },
        ],
      },
    ],
  },
  {
    id: 84,
    via: "Calle Orden y Libertad",
    cuadra: "2",
    estacionamiento: "10",
    blocks: [
      {
        name: "cuadra 2",
        cuadras: [
          { lat: -12.102692186526905, lng: -77.01231858615631 },
          { lat: -12.10126981730153, lng: -77.01266756205862 },
          { lat: -12.101130732552289, lng: -77.01198098990591 },
          { lat: -12.102237845162513, lng: -77.01173822405694 },
        ],
      },
    ],
  },
  {
    id: 85,
    via: "Calle Valmore Roncalla",
    cuadra: "3",
    estacionamiento: "13",
    blocks: [
      {
        name: "cuadra 3",
        cuadras: [
          { lat: -12.092520796880777, lng: -77.00927979050131 },
          { lat: -12.092110946865946, lng: -77.00986773902989 },
          { lat: -12.090925901881919, lng: -77.00921530581913 },
          { lat: -12.091246736173924, lng: -77.00858752851924 },
        ],
      },
    ],
  },
  {
    id: 86,
    via: "Calle Virtud y Unión",
    cuadra: "1",
    estacionamiento: "7",
    blocks: [
      {
        name: "cuadra 1",
        cuadras: [
          { lat: -12.093917713914621, lng: -77.01093976867409 },
          { lat: -12.093140194866539, lng: -77.01170514193691 },
          { lat: -12.092666653657783, lng: -77.01128694271002 },
          { lat: -12.093347241080691, lng: -77.01062041377904 },
        ],
      },
    ],
  },
];

export { columns, parkings };
