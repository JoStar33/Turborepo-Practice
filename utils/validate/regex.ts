export const regex = {
	signInId: /^[a-z0-9_-]{5,20}$/,
	email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
	password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/,
	businessNumber: /^[0-9]{3}-[0-9]{2}-[0-9]{5}$/,
	phone: /^01([0])([0-9]{8})$/,
	localNumber: /^(0(2|3[1-3]|4[1-4]|5[1-5]|6[1-4]|70))(\d{3,4})(\d{4})$/, //지역 전화번호
	eng: /[a-z]/gi,
	num: /[0-9]/g,
	special_1: /^[0-9a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ\x20]*$/gi, //한글,영문,숫자를 제외한 특수문자,이모티콘 입력 체크
	space: /\s/,
	allSpace: /^[^\s]*$/,
	firstSpace: /^\S/, //첫번째글자 공백 체크
	lastSpace: /\S$/, //마지막 글자 공백 체크
	koreanOnly: /^[가-힣]+$/,
	korean: /[가-힣]/,
	koreanNot: /^[^\uAC00-\uD7A3\u3131-\u3163\u119E\u11A2\u11A8]+$/, //한글입력 불가 체크
	koreanNot2: /^[^가-힣ㄱ-ㅎㅏ-ㅣ]*$/, //공백 가능한 한글입력 불가
	gather: /^[^ㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣ]*$/, //모음 체크
	consonant: /^[^ㄱ-ㅎ]*$/, //자음 체크
	id: /^[a-z]+[a-z0-9]{5,19}$/, //아이디 영소문자로 시작하는 6~20자 영문자 또는 숫자
	onlyNumber: /^[0-9.]*$/,
	onlyEng: /^[a-zA-Z]*$/,
	optionLocalNumber: /^(0(2|3[1-3]|4[1-4]|5[1-5]|6[1-4]|70))(\d{3,4})(\d{4})$|^$/,
	tagTitleKor: /^(?=.*[가-힣])[가-힣a-zA-Z\d]*$/,
	tagTitleEng: /^(?=.*[a-zA-Z])[a-zA-Z_0-9]*$|^$/,
	twoDecimalPlaces: /^(?!0$)\d+(\.\d{0,2})?$/, //숫자, ., 소수점 두 자리까지 입력 가능
};
