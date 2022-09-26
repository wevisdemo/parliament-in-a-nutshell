export type RP_TYPE = {
	name: string;
	side: 'gov' | 'opp' | 'free';
	src: string;
	color: string;
	replace_by?: RP_TYPE;
};

type PART1_DATA_TYPE = {
	resign: RP_TYPE[][];
	pass: RP_TYPE[][];
	fire: RP_TYPE[][];
};
export const PART1_DATA: PART1_DATA_TYPE = {
	resign: [
		[
			{
				name: 'นฤมล ภิญโญสินวัฒน์',
				side: 'gov',
				src: 'rp/ลาออก-นฤมล.png',
				color: '#0B3757',
				replace_by: {
					name: 'พรชัย ตระกูลวรานนท์',
					side: 'gov',
					src: 'rp/แทน-พรชัย.png',
					color: '#0B3757'
				}
			},
			{
				name: 'สุพล ฟองงาม',
				side: 'gov',
				src: 'rp/ลาออก-สุพล.png',
				color: '#0B3757',
				replace_by: {
					name: 'ชวน ชูจันทร์',
					side: 'gov',
					src: 'rp/แทน-ชวน.png',
					color: '#0B3757'
				}
			},
			{
				name: 'วิเชียร ชวลิต',
				side: 'gov',
				src: 'rp/ลาออก-วิเชียร.png',
				color: '#0B3757',
				replace_by: {
					name: 'ภาคิน สมมิตรธนกุล',
					side: 'gov',
					src: 'rp/แทน-ภาคิน.png',
					color: '#0B3757'
				}
			},
			{
				name: 'วทันยา บุนนาค',
				side: 'gov',
				src: 'rp/ลาออก-วทันยา.png',
				color: '#0B3757',
				replace_by: {
					name: 'ธนกร วังบุญคงชนะ',
					side: 'gov',
					src: 'rp/แทน-ธนกร.png',
					color: '#0B3757'
				}
			},
			{
				name: 'ณัฏฐพล ทีปสุวรรณ',
				side: 'gov',
				src: 'rp/ศาลตัด-ณัฏฐพล.png',
				color: '#0B3757',
				replace_by: {
					name: 'ยุทธนา โพธสุธน',
					side: 'free',
					src: 'rp/pt14-ยุทธนา.png',
					color: '#F0DA8C'
				}
			}
		],
		[
			{
				name: 'ทรงศักดิ์ ทองศรี',
				side: 'gov',
				src: 'rp/ลาออก-ทรงศักดิ์.png',
				color: '#065CAB',
				replace_by: {
					name: 'เศรษฐพงศ์ มะลิสุวรรณ',
					side: 'gov',
					src: 'rp/แทน-เศรษฐพงศ์.png',
					color: '#065CAB'
				}
			},
			{
				name: 'วีรศักดิ์ หวังศุภกิจโกศล',
				side: 'gov',
				src: 'rp/ลาออก-วีรศักดิ์.png',
				color: '#065CAB',
				replace_by: {
					name: 'มารุต มัสยวาณิช',
					side: 'gov',
					src: 'rp/แทน-มารุต.png',
					color: '#065CAB'
				}
			},
			{
				name: 'หม่อมราชวงศ์จัตุมงคล โสณกุล',
				side: 'gov',
				src: 'rp/ลาออก-จัตุมงคล.png',
				color: '#18246D',
				replace_by: {
					name: 'ทวีศักดิ์ ณ ตะกั่วทุ่ง (ลาออก)',
					side: 'gov',
					src: 'rp/แทน-ทวีศักดิ์.png',
					color: '#18246D',
					replace_by: {
						name: 'จุฑาฑัตต เหล่าธรรมทัศน์',
						side: 'gov',
						src: 'rp/แทน-จุฑาฑัตต.png',
						color: '#18246D'
					}
				}
			},
			{
				name: 'เพชรชมพู กิจบูรณะ',
				side: 'gov',
				src: 'rp/ลาออก-เพชรชมพู.png',
				color: '#18246D',
				replace_by: {
					name: 'สุเนตตา แซ่โก๊ะ',
					side: 'gov',
					src: 'rp/แทน-สุเนตตา.png',
					color: '#18246D'
				}
			}
		],
		[
			{
				name: 'อภิสิทธิ์ เวชชาชีวะ',
				side: 'gov',
				src: 'rp/ลาออก-อภิสิทธิ์.png',
				color: '#349EE9',
				replace_by: {
					name: 'สุทัศน์ เงินหมื่น',
					side: 'gov',
					src: 'rp/แทน-สุทัศน์.png',
					color: '#349EE9'
				}
			},
			{
				name: 'กรณ์ จาติกวณิช',
				side: 'gov',
				src: 'rp/ลาออก-กรณ์.png',
				color: '#349EE9',
				replace_by: {
					name: 'พิสิฐ ลี้อาธรรม',
					side: 'gov',
					src: 'rp/แทน-พิสิฐ.png',
					color: '#349EE9'
				}
			},
			{
				name: 'จุติ ไกรฤกษ์',
				side: 'gov',
				src: 'rp/ลาออก-จุติ.png',
				color: '#349EE9',
				replace_by: {
					name: 'อิสระ เสรีวัฒนวุฒิ',
					side: 'gov',
					src: 'rp/แทน-อิสระ.png',
					color: '#349EE9'
				}
			},
			{
				name: 'พลตรีทรงกลด ทิพย์รัตน์',
				side: 'gov',
				src: 'rp/ลาออก-ทรงกลด.png',
				color: '#AAC826',
				replace_by: {
					name: 'บุญญาพร นาตะธนภัทร',
					side: 'gov',
					src: 'rp/แทน-บุญญาพร.png',
					color: '#AAC826'
				}
			}
		],
		[
			{
				name: 'พีระพันธุ์ สาลีรัฐวิภาค',
				side: 'gov',
				src: 'rp/ลาออก-พีระพันธุ์.png',
				color: '#349EE9',
				replace_by: {
					name: 'พิมพ์รพี พันธุ์วิชาติกุล',
					side: 'gov',
					src: 'rp/แทน-พิมพ์รพี.png',
					color: '#349EE9'
				}
			},
			{
				name: 'อภิชัย เตชะอุบล',
				side: 'gov',
				src: 'rp/ลาออก-อภิชัย.png',
				color: '#349EE9',
				replace_by: {
					name: 'นราพัฒน์ แก้วทอง (ลาออก)',
					side: 'gov',
					src: 'rp/แทน-นราพัฒน์.png',
					color: '#349EE9',
					replace_by: {
						name: 'เจือ ราชสีห์',
						side: 'gov',
						src: 'rp/แทน-เจือ.png',
						color: '#349EE9'
					}
				}
			},
			{
				name: 'วีระชัย วีระเมธีกุล',
				side: 'gov',
				src: 'rp/ลาออก-วีระชัย.png',
				color: '#349EE9',
				replace_by: {
					name: 'ไชยยศ จิรเมธากร (ลาออก)',
					side: 'gov',
					src: 'rp/แทน-ไชยยศ.png',
					color: '#349EE9',
					replace_by: {
						name: 'มัลลิกา บุญมีตระกูล มหาสุข',
						side: 'gov',
						src: 'rp/แทน-มัลลิกา.png',
						color: '#349EE9'
					}
				}
			},
			{
				name: 'สมเกียรติ ศรลัมพ์',
				side: 'gov',
				src: 'rp/ลาออก-สมเกียรติ.png',
				color: '#288707',
				replace_by: {
					name: 'นันทนา สงฆ์ประชา',
					side: 'gov',
					src: 'rp/แทน-นันทนา.png',
					color: '#288707'
				}
			}
		],
		[
			{
				name: 'จุมพิตา จันทรขจร',
				side: 'opp',
				src: 'rp/ลาออก-จุมพิตา.png',
				color: '#ff6f21',
				replace_by: {
					name: 'เผดิมชัย สะสมทรัพย์',
					side: 'gov',
					src: 'rp/แทน-เผดิมชัย.png',
					color: '#CC8AE3'
				}
			},
			{
				name: 'วิโรจน์ ลักขณาอดิศร',
				side: 'opp',
				src: 'rp/ลาออก-วิโรจน์.png',
				color: '#ff6f21',
				replace_by: {
					name: 'ว่าง',
					side: 'opp',
					src: 'w.png',
					color: '#fff'
				}
			},
			{
				name: 'วินท์ สุธีรชัย',
				side: 'opp',
				src: 'rp/ลาออก-วินท์.png',
				color: '#ff6f21',
				replace_by: {
					name: 'ว่าง',
					side: 'opp',
					src: 'w.png',
					color: '#fff'
				}
			},
			{
				name: 'วันมูหะมัดนอร์ มะทา',
				side: 'opp',
				src: 'rp/ลาออก-วันมูหะมัดนอร์.png',
				color: '#D87A0E',
				replace_by: {
					name: 'พันตำรวจเอกทวี สอดส่อง',
					side: 'opp',
					src: 'rp/แทน-ทวี.png',
					color: '#D87A0E'
				}
			},
			{
				name: 'มิ่งขวัญ แสงสุวรรณ',
				side: 'opp',
				src: 'rp/ลาออก-มิ่งขวัญ.png',
				color: '#75328C',
				replace_by: {
					name: 'จิราพร นาคดิลก',
					side: 'gov',
					src: 'rp/แทน-จิราพร.png',
					color: '#75328C'
				}
			}
		]
	],
	pass: [
		[
			{
				name: 'ชัย ชิดชอบ',
				side: 'gov',
				src: 'rp/เสียชีวิต-ชัย.png',
				color: '#065CAB',
				replace_by: {
					name: 'สวาป เผ่าประทาน',
					side: 'gov',
					src: 'rp/แทน-สวาป.png',
					color: '#065CAB'
				}
			},
			{
				name: 'อิทธิรัตน์ จันทรสุรินทร์',
				side: 'opp',
				src: 'rp/เสียชีวิต-อิทธิรัตน์.png',
				color: '#E50000',
				replace_by: {
					name: 'วัฒนา สิทธิวัง (แพ้เลือกตั้งซ่อม)',
					side: 'free',
					src: 'rp/pt14-วัฒนา.png',
					color: '#f0da8c',
					replace_by: {
						name: 'เดชทวี ศรีวิชัย',
						side: 'opp',
						src: 'rp/แทน-เดชทวี.png',
						color: '#D4B41E'
					}
				}
			}
		]
	],
	fire: [
		[
			{
				name: 'พุทธิพงษ์ ปุณณกันต์',
				side: 'gov',
				src: 'rp/ศาลตัด-พุทธิพงษ์.png',
				color: '#0B3757',
				replace_by: {
					name: 'ต่อศักดิ์ อัศวเหม',
					side: 'gov',
					src: 'rp/แทน-ต่อศักดิ์.png',
					color: '#0B3757'
				}
			},
			{
				name: 'ปารีณา ไกรคุปต์',
				side: 'gov',
				src: 'rp/ศาลตัด-ปารีณา.png',
				color: '#0B3757',
				replace_by: {
					name: 'ชัยทิพย์ กมลพันธ์ทิพย์',
					side: 'gov',
					src: 'rp/แทน-ชัยทิพย์.png',
					color: '#349EE9'
				}
			},
			{
				name: 'สิระ เจนจาคะ',
				side: 'gov',
				src: 'rp/ศาลตัด-สิระ.png',
				color: '#0B3757',
				replace_by: {
					name: 'สุรชาติ เทียนทอง',
					side: 'opp',
					src: 'rp/แทน-สุรชาติ.png',
					color: '#E50000'
				}
			},
			{
				name: 'พันตำรวจโทไวพจน์ อาภรณ์รัตน์',
				side: 'gov',
				src: 'rp/ศาลตัด-ไวพจน์.png',
				color: '#0B3757',
				replace_by: {
					name: 'เพชรภูมิ อาภรณ์รัตน์',
					side: 'gov',
					src: 'rp/แทน-เพชรภูมิ.png',
					color: '#0B3757'
				}
			},
			{
				name: 'นาที รัชกิจประการ',
				side: 'gov',
				src: 'rp/แทน-นาที.png',
				color: '#065CAB',
				replace_by: {
					name: 'กนกวรรณ วิลาวัลย์ (ลาออก)',
					side: 'gov',
					src: 'rp/ลาออก-กนกวรรณ.png',
					color: '#065CAB',
					replace_by: {
						name: 'สุชาติ โชคชัยวัฒนากร',
						side: 'gov',
						src: 'rp/แทน-สุชาติ.png',
						color: '#065CAB'
					}
				}
			}
		],
		[
			{
				name: 'ชุมพล จุลใส',
				side: 'gov',
				src: 'rp/ศาลตัด-ชุมพล.png',
				color: '#349EE9',
				replace_by: {
					name: 'อิสรพงษ์ มากอำไพ',
					side: 'gov',
					src: 'rp/แทน-อิสรพงษ์.png',
					color: '#349EE9'
				}
			},
			{
				name: 'ถาวร เสนเนียม',
				side: 'gov',
				src: 'rp/ศาลตัด-ถาวร.png',
				color: '#349EE9',
				replace_by: {
					name: 'สุภาพร กำเนิดผล',
					side: 'gov',
					src: 'rp/แทน-สุภาพร.png',
					color: '#349EE9'
				}
			},
			{
				name: 'อิสสระ สมชัย',
				side: 'gov',
				src: 'rp/ศาลตัด-อิสสระ.png',
				color: '#349EE9',
				replace_by: {
					name: 'จักพันธ์ ปิยพรไพบูลย์',
					side: 'gov',
					src: 'rp/แทน-จักพันธ์.png',
					color: '#349EE9'
				}
			},
			{
				name: 'เทพไท เสนพงศ์',
				side: 'gov',
				src: 'rp/ศาลตัด-เทพไท.png',
				color: '#349EE9',
				replace_by: {
					name: 'อาญาสิทธิ์ ศรีสุวรรณ',
					side: 'gov',
					src: 'rp/แทน-อาญาสิทธิ์.png',
					color: '#0B3757'
				}
			},
			{
				name: 'สำลี รักสุทธิ',
				side: 'gov',
				src: 'rp/pt12-สำลี.png',
				color: '#065CAB',
				replace_by: {
					name: 'ว่าง',
					side: 'gov',
					src: 'w.png',
					color: '#fff'
				}
			}
		],
		[
			{
				name: 'ธนาธร จึงรุ่งเรืองกิจ',
				side: 'opp',
				src: 'rp/ศาลตัด-ธนาธร.png',
				color: '#ff6f21',
				replace_by: {
					name: 'มานพ คีรีภูวดล',
					side: 'opp',
					src: 'rp/แทน-มานพ.png',
					color: '#ff6f21'
				}
			},
			{
				name: 'กุลธิดา รุ่งเรืองเกียรติ',
				side: 'opp',
				src: 'rp/ศาลตัด-กุลธิดา.png',
				color: '#ff6f21',
				replace_by: {
					name: 'ว่าง',
					side: 'opp',
					src: 'w.png',
					color: '#fff'
				}
			},
			{
				name: 'ไกลก้อง ไวทยการ',
				side: 'opp',
				src: 'rp/ศาลตัด-ไกลก้อง.png',
				color: '#ff6f21',
				replace_by: {
					name: 'ว่าง',
					side: 'opp',
					src: 'w.png',
					color: '#fff'
				}
			},
			{
				name: 'นวัธ เตาะเจริญสุข',
				side: 'opp',
				src: 'rp/ศาลตัด-นวัธ.png',
				color: '#e50000',
				replace_by: {
					name: 'สมศักดิ์ คุณเงิน',
					side: 'free',
					src: 'rp/pt14-สมศักดิ์.png',
					color: '#F0DA8C'
				}
			}
		],
		[
			{
				name: 'ชำนาญ จันทร์เรือง',
				side: 'opp',
				src: 'rp/ศาลตัด-ชำนาญ.png',
				color: '#ff6f21',
				replace_by: {
					name: 'ว่าง',
					side: 'opp',
					src: 'w.png',
					color: '#fff'
				}
			},
			{
				name: 'สุรชัย ศรีสารคาม',
				side: 'opp',
				src: 'rp/ศาลตัด-สุรชัย.png',
				color: '#ff6f21',
				replace_by: {
					name: 'ว่าง',
					side: 'opp',
					src: 'w.png',
					color: '#fff'
				}
			},
			{
				name: 'นิรามาน สุไลมาน',
				side: 'opp',
				src: 'rp/ศาลตัด-นิรามาน.png',
				color: '#ff6f21',
				replace_by: {
					name: 'ว่าง',
					side: 'opp',
					src: 'w.png',
					color: '#fff'
				}
			},
			{
				name: 'ปิยบุตร แสงกนกกุล',
				side: 'opp',
				src: 'rp/ศาลตัด-ปิยบุตร.png',
				color: '#ff6f21',
				replace_by: {
					name: 'ว่าง',
					side: 'opp',
					src: 'w.png',
					color: '#fff'
				}
			},
			{
				name: 'เจนวิทย์ ไกรสินธุ์',
				side: 'opp',
				src: 'rp/ศาลตัด-เจนวิทย์.png',
				color: '#ff6f21',
				replace_by: {
					name: 'ว่าง',
					side: 'opp',
					src: 'w.png',
					color: '#fff'
				}
			}
		],
		[
			{
				name: 'พรรณิการ์ วานิช',
				side: 'opp',
				src: 'rp/ศาลตัด-พรรณิการ์.png',
				color: '#ff6f21',
				replace_by: {
					name: 'ว่าง',
					side: 'opp',
					src: 'w.png',
					color: '#fff'
				}
			},
			{
				name: 'เยาวลักษณ์ วงษ์ประภารัตน์',
				side: 'opp',
				src: 'rp/ศาลตัด-เยาวลักษณ์.png',
				color: '#ff6f21',
				replace_by: {
					name: 'ว่าง',
					side: 'opp',
					src: 'w.png',
					color: '#fff'
				}
			},
			{
				name: 'ธัญญ์วาริน สุขะพิสิษฐ์',
				side: 'opp',
				src: 'rp/ศาลตัด-ธัญญ์วาริน.png',
				color: '#ff6f21',
				replace_by: {
					name: 'ว่าง',
					side: 'opp',
					src: 'w.png',
					color: '#fff'
				}
			},
			{
				name: 'จารุวรรณ ศรัณย์เกตุ',
				side: 'opp',
				src: 'rp/ศาลตัด-จารุวรรณ.png',
				color: '#ff6f21',
				replace_by: {
					name: 'ว่าง',
					side: 'opp',
					src: 'w.png',
					color: '#fff'
				}
			},
			{
				name: 'พงศกร รอดชมภู',
				side: 'opp',
				src: 'rp/ศาลตัด-พงศกร.png',
				color: '#ff6f21',
				replace_by: {
					name: 'ว่าง',
					side: 'opp',
					src: 'w.png',
					color: '#fff'
				}
			}
		]
	]
};
