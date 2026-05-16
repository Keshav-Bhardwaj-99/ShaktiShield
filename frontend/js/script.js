document.addEventListener('DOMContentLoaded', () => {
    // --- Language Translation Setup ---
    const translations = {
        en: {
            page_title: "SHAKTISHIELD - Anonymous Women's Safety Platform",
            brand_name: "SHAKTISHIELD",
            select_option: "Select an option",
            btn_next: "Next",
            btn_back: "Back",
            btn_submit_report: "Submit Report",
            notification_success_submit: "Your anonymous report has been submitted successfully!",
            notification_error_required_fields: "Please fill in all required fields for Incident Details.",
            notification_error_city_town: "Please provide the City/Town for the incident location.",
            notification_error_contact_details: "Please provide contact details for the selected contact method.",
            notification_error_review_fields: "Please review all fields before submitting.",
            nav_home: "Home",
            nav_community: "Community",
            nav_about: "About",
            nav_report: "Report",
            nav_resources: "Resources",
            nav_contact: "Contact",
            nav_emergency_contacts: "Emergency Contacts",
            hero_title: "Your Safety Matters",
            hero_subtitle: "Report incidents anonymously and get the help you deserve without fear of exposure",
            btn_report_incident: "Report Incident",
            btn_emergency_help: "Emergency Help",
            about_title: "About SHAKTISHIELD",
            about_card1_title: "Anonymous Reporting",
            about_card1_text: "Your identity remains completely confidential. No personal information is required to submit a report.",
            about_card2_title: "Immediate Assistance",
            about_card2_text: "Your report is immediately sent to authorities who can help, with your location automatically shared.",
            about_card3_title: "Support Resources",
            about_card3_text: "Access to counseling, legal aid, and shelters regardless of whether you file an official report.",
            how_it_works_title: "How It Works",
            how_it_works_step1_title: "Report Anonymously",
            how_it_works_step1_text: "Fill out our simple form with details of the incident. No personal information is required.",
            how_it_works_step2_title: "Location Tracking",
            how_it_works_step2_text: "Your approximate location is automatically shared with authorities (you can disable this).",
            how_it_works_step3_title: "Immediate Response",
            how_it_works_step3_text: "Local authorities receive your report and can respond to help you immediately.",
            how_it_works_step4_title: "Follow-up Support",
            how_it_works_step4_text: "Access to counseling, legal aid, and shelters whether you pursue official action or not.",
            report_title: "File an Anonymous Report",
            tab_incident_details: "Incident Details",
            tab_location: "Location",
            tab_additional_info: "Additional Info",
            tab_review: "Review",
            incident_tab_title: "Tell us what happened",
            incident_type_label: "Type of Incident *",
            incident_type_harassment: "Verbal Harassment",
            incident_type_physical: "Physical Assault",
            incident_type_sexual: "Sexual Assault",
            incident_type_domestic: "Domestic Violence",
            incident_type_stalking: "Stalking",
            incident_type_other: "Other",
            incident_time_label: "When did it happen? *",
            incident_description_label: "Description of what happened *",
            incident_description_placeholder: "Provide as much detail as you feel comfortable sharing",
            know_perpetrator_label: "I know who did this",
            perpetrator_name_label: "Perpetrator's Name (if known)",
            perpetrator_name_placeholder: "Optional",
            perpetrator_relationship_label: "Relationship to Perpetrator",
            perpetrator_relationship_placeholder: "Optional",
            location_tab_title: "Where did it happen?",
            use_current_location_label: "Use my current location *",
            share_location_label: "Automatically share my approximate location",
            share_location_info: "We'll only share your approximate location (within 500m) to help authorities respond",
            location_city_label: "City/Town *",
            location_exact_label: "Exact Location",
            location_exact_placeholder: "Street address or landmark",
            additional_tab_title: "Additional Information",
            evidence_label: "Do you have any evidence?",
            evidence_photos: "Photos",
            evidence_videos: "Videos",
            evidence_messages: "Texts/Messages",
            evidence_witnesses: "Witnesses",
            support_resources_question: "Would you like to receive support resources?",
            support_counseling: "Counseling services",
            support_legal: "Legal assistance",
            support_shelter: "Shelter information",
            contact_method_question: "How would you like authorities to contact you?",
            contact_method_anonymous: "Anonymous (no contact)",
            contact_method_secure_message: "Secure message through this platform",
            contact_method_alternative_number: "Alternative phone number (not your personal number)",
            contact_details_label: "Contact Details",
            contact_details_placeholder: "Enter contact details",
            contact_details_info: "This will only be shared with authorities handling your case",
            review_tab_title: "Review Your Report",
            review_incident_type_label: "Incident Type:",
            review_when_label: "When:",
            review_description_label: "Description:",
            review_perpetrator_known_label: "Perpetrator Known:",
            review_perpetrator_name_label: "Perpetrator Name:",
            review_perpetrator_relationship_label: "Relationship:",
            review_location_shared_label: "Location Shared:",
            review_city_town_label: "City/Town:",
            review_exact_location_label: "Exact Location:",
            review_evidence_label: "Evidence:",
            review_support_resources_label: "Support Resources Requested:",
            review_contact_method_label: "Contact Method:",
            review_contact_details_label: "Contact Details:",
            review_not_provided: "Not provided",
            review_yes: "Yes",
            review_no: "No",
            review_yes_approximate: "Yes (Approximate)",
            review_none: "None",
            resources_title: "Resources & Support",
            resources_helplines_title: "Helplines & Hotlines",
            resources_helplines_women: "National Women's Helpline: 1091 (India) - 24/7 support for women in distress.",
            resources_helplines_childline: "Childline India: 1098 - For children in need of care and protection.",
            resources_helplines_cyber_crime: "Cyber Crime Helpline (India): 1930 / 155260 - For reporting cyber crimes against women and children.",
            resources_helplines_police: "Women's Safety Cell / Police Helpline: 112 (All India Emergency) - Integrated emergency services.",
            resources_legal_title: "Legal Aid & Rights",
            resources_legal_nalsa: "National Legal Services Authority (NALSA) (India): Provides free legal services to the weaker sections of society.",
            resources_legal_slsa: "State Legal Services Authorities (SLSAs): Contact your state's legal services authority for local support.",
            resources_legal_dlsa: "District Legal Services Authorities (DLSAs): For legal aid at the district level.",
            resources_legal_advocates: "Women's Rights Advocates: Connect with NGOs and legal organizations specializing in women's rights in India.",
            resources_legal_rights_info: "Understanding Your Rights: Information on laws related to domestic violence, sexual harassment, and assault under Indian Penal Code (IPC) and other relevant acts.",
            resources_counseling_title: "Counseling & Mental Health",
            resources_counseling_govt: "Government Counseling Centers: Many state governments offer free or subsidized counseling services.",
            resources_counseling_ngos: "NGOs & Support Groups: Organizations like Sneha (Chennai) or Sangath (Goa) offer mental health support. Search for local NGOs in your city.",
            resources_counseling_online: "Online Counseling Platforms (India-based): Look for platforms that connect you with licensed therapists in India.",
            resources_counseling_trauma: "Trauma-Informed Care: Seek out mental health professionals in India specializing in trauma recovery.",
            resources_self_defense_title: "Self-Defense & Safety Tips",
            resources_self_defense_academies: "Local Self-Defense Academies: Many cities in India offer self-defense classes specifically for women.",
            resources_self_defense_police: "Police-led Self-Defense Programs: Some police departments conduct workshops for women's safety.",
            resources_self_defense_awareness: "Awareness & Prevention: Stay vigilant, avoid isolated areas, and trust your instincts.",
            resources_self_defense_apps: "Safety Apps (Indian Context): Apps like 'Himmat Plus' (Delhi Police), 'Raksha', or 'VithU' can be useful for emergencies.",
            resources_self_defense_preparedness: "Emergency Preparedness: Share your live location with trusted contacts, keep emergency numbers on speed dial, and know your nearest safe spots.",
            emergency_contacts_title: "Emergency Contacts",
            emergency_police_title: "Police Emergency",
            emergency_police_info: "(All India Emergency Number)",
            emergency_women_helpline_title: "National Women's Helpline",
            emergency_women_helpline_info: "(For women in distress)",
            emergency_fire_title: "Fire Services",
            emergency_fire_info: "(For fire emergencies)",
            emergency_ambulance_title: "Ambulance Services",
            emergency_ambulance_info: "(Medical emergencies)",
            emergency_childline_title: "Childline India",
            emergency_childline_info: "(For children in need)",
            emergency_disaster_title: "Disaster Management",
            emergency_disaster_info: "(National Disaster Response Force)",
            footer_copyright: " 2025 SHAKTISHIELD. All rights reserved. Your safety is our priority.",
            stats_reports: "Reports Filed",
            stats_helped: "People Helped",
            stats_response: "Response Time",
            // Chatbot translations
            chatbot_name: "Shakti Sahayak",
            chatbot_status: "Online • Always here to help",
            chatbot_welcome: "Hello! I'm Shakti Sahayak. I'm here to help you. You can ask me anything - legal advice, emotional support, or emergency help.",
            chatbot_emergency: "Emergency",
            chatbot_legal: "Legal Advice",
            chatbot_support: "Emotional Support",
            chatbot_input_placeholder: "Type your message...",
            // Advanced chatbot features
            chatbot_suggestions: "Smart Suggestions:",
            chatbot_recording: "Recording... Speak now",
            chatbot_typing: "Shakti Sahayak is typing...",
            chatbot_voice_output: "Voice Output",
            chatbot_smart_suggestions: "Smart Suggestions",
            chatbot_voice_not_supported: "Voice input not supported in this browser",
            chatbot_voice_permission_denied: "Microphone permission denied",
            chatbot_voice_error: "Voice recognition error",
            chatbot_listening: "Listening...",
            chatbot_processing: "Processing your voice...",
            // Emergency system translations
            emergency_contacts_title: "Emergency Contacts",
            share_location_title: "Share Your Location",
            getting_location: "Getting your location...",
            emergency_info: "Your location will be automatically shared when calling emergency services.",
            // Community features
            community_title: "Community Support",
            support_groups_title: "Support Groups",
            support_groups_desc: "Join anonymous support groups with women who understand your experiences.",
            peer_chat_title: "Peer Chat",
            peer_chat_desc: "Connect with trained peer supporters for confidential conversations.",
            wellness_title: "Wellness Resources",
            wellness_desc: "Access mental health resources, meditation guides, and self-care tips.",
            join_group: "Join Group",
            start_chat: "Start Chat",
            explore_resources: "Explore Resources",
            community_stats: "Community Impact",
            active_supporters: "Active Supporters",
            support_sessions: "Support Sessions",
            women_helped: "Women Helped",
            success_stories: "Success Stories",
        },
        hi: {
            page_title: "शक्ति शील्ड - महिलाओं की सुरक्षा के लिए गुमनाम मंच",
            brand_name: "शक्ति शील्ड",
            select_option: "एक विकल्प चुनें",
            btn_next: "अगला",
            btn_back: "वापस",
            btn_submit_report: "रिपोर्ट सबमिट करें",
            notification_success_submit: "आपकी गुमनाम रिपोर्ट सफलतापूर्वक सबमिट कर दी गई है!",
            notification_error_required_fields: "कृपया घटना विवरण के लिए सभी आवश्यक फ़ील्ड भरें।",
            notification_error_city_town: "कृपया घटना के स्थान के लिए शहर/कस्बा प्रदान करें।",
            notification_error_contact_details: "कृपया चयनित संपर्क विधि के लिए संपर्क विवरण प्रदान करें।",
            notification_error_review_fields: "कृपया सबमिट करने से पहले सभी फ़ील्ड की समीक्षा करें।",
            nav_home: "होम",
            nav_community: "समुदाय",
            nav_about: "हमारे बारे में",
            nav_report: "रिपोर्ट",
            nav_resources: "संसाधन",
            nav_emergency_contacts: "आपातकालीन संपर्क",
            hero_title: "आपकी सुरक्षा मायने रखती है",
            hero_subtitle: "बिना किसी डर के घटनाओं की गुमनाम रूप से रिपोर्ट करें और वह मदद प्राप्त करें जिसके आप हकदार हैं",
            btn_report_incident: "घटना की रिपोर्ट करें",
            btn_emergency_help: "आपातकालीन सहायता",
            about_title: "शक्ति शील्ड के बारे में",
            about_card1_title: "गुमनाम रिपोर्टिंग",
            about_card1_text: "आपकी पहचान पूरी तरह गोपनीय रहती है। रिपोर्ट सबमिट करने के लिए किसी व्यक्तिगत जानकारी की आवश्यकता नहीं है।",
            about_card2_title: "तत्काल सहायता",
            about_card2_text: "आपकी रिपोर्ट तुरंत अधिकारियों को भेजी जाती है जो मदद कर सकते हैं, आपके स्थान को स्वचालित रूप से साझा किया जाता है।",
            about_card3_title: "समर्थन संसाधन",
            about_card3_text: "आधिकारिक रिपोर्ट दर्ज करने या न करने के बावजूद परामर्श, कानूनी सहायता और आश्रयों तक पहुंच।",
            how_it_works_title: "यह कैसे काम करता है",
            how_it_works_step1_title: "गुमनाम रूप से रिपोर्ट करें",
            how_it_works_step1_text: "घटना के विवरण के साथ हमारा सरल फॉर्म भरें। किसी व्यक्तिगत जानकारी की आवश्यकता नहीं है।",
            how_it_works_step2_title: "स्थान ट्रैकिंग",
            how_it_works_step2_text: "आपका अनुमानित स्थान स्वचालित रूप से अधिकारियों के साथ साझा किया जाता है (आप इसे अक्षम कर सकते हैं)।",
            how_it_works_step3_title: "तत्काल प्रतिक्रिया",
            how_it_works_step3_text: "स्थानीय अधिकारियों को आपकी रिपोर्ट प्राप्त होती है और वे तुरंत आपकी मदद के लिए प्रतिक्रिया दे सकते हैं।",
            how_it_works_step4_title: "अनुवर्ती सहायता",
            how_it_works_step4_text: "आधिकारिक कार्रवाई करने या न करने पर भी परामर्श, कानूनी सहायता और आश्रयों तक पहुंच।",
            report_title: "एक गुमनाम रिपोर्ट दर्ज करें",
            tab_incident_details: "घटना विवरण",
            tab_location: "स्थान",
            tab_additional_info: "अतिरिक्त जानकारी",
            tab_review: "समीक्षा",
            incident_tab_title: "हमें बताएं कि क्या हुआ",
            incident_type_label: "घटना का प्रकार *",
            incident_type_harassment: "मौखिक उत्पीड़न",
            incident_type_physical: "शारीरिक हमला",
            incident_type_sexual: "यौन उत्पीड़न",
            incident_type_domestic: "घरेलू हिंसा",
            incident_type_stalking: "पीछा करना",
            incident_type_other: "अन्य",
            incident_time_label: "यह कब हुआ? *",
            incident_description_label: "जो हुआ उसका विवरण *",
            incident_description_placeholder: "जितना आप साझा करने में सहज महसूस करें, उतना विवरण प्रदान करें",
            know_perpetrator_label: "मैं जानता हूँ कि यह किसने किया",
            perpetrator_name_label: "अपराधी का नाम (यदि ज्ञात हो)",
            perpetrator_name_placeholder: "वैकल्पिक",
            perpetrator_relationship_label: "अपराधी से संबंध",
            perpetrator_relationship_placeholder: "वैकल्पिक",
            location_tab_title: "यह कहाँ हुआ?",
            use_current_location_label: "मेरे वर्तमान स्थान का उपयोग करें *",
            share_location_label: "मेरे अनुमानित स्थान को स्वचालित रूप से साझा करें",
            share_location_info: "हम अधिकारियों को प्रतिक्रिया देने में मदद करने के लिए केवल आपका अनुमानित स्थान (500 मीटर के भीतर) साझा करेंगे",
            location_city_label: "शहर/कस्बा *",
            location_exact_label: "सटीक स्थान",
            location_exact_placeholder: "सड़क का पता या मील का पत्थर",
            additional_tab_title: "अतिरिक्त जानकारी",
            evidence_label: "क्या आपके पास कोई सबूत है?",
            evidence_photos: "तस्वीरें",
            evidence_videos: "वीडियो",
            evidence_messages: "टेक्स्ट/संदेश",
            evidence_witnesses: "गवाह",
            support_resources_question: "क्या आप सहायता संसाधन प्राप्त करना चाहेंगे?",
            support_counseling: "परामर्श सेवाएं",
            support_legal: "कानूनी सहायता",
            support_shelter: "आश्रय जानकारी",
            contact_method_question: "आप अधिकारियों से कैसे संपर्क करना चाहेंगे?",
            contact_method_anonymous: "गुमनाम (कोई संपर्क नहीं)",
            contact_method_secure_message: "इस मंच के माध्यम से सुरक्षित संदेश",
            contact_method_alternative_number: "वैकल्पिक फोन नंबर (आपका व्यक्तिगत नंबर नहीं)",
            contact_details_label: "संपर्क विवरण",
            contact_details_placeholder: "संपर्क विवरण दर्ज करें",
            contact_details_info: "यह केवल आपके मामले को संभालने वाले अधिकारियों के साथ साझा किया जाएगा",
            review_tab_title: "अपनी रिपोर्ट की समीक्षा करें",
            review_incident_type_label: "घटना का प्रकार:",
            review_when_label: "कब:",
            review_description_label: "विवरण:",
            review_perpetrator_known_label: "अपराधी ज्ञात:",
            review_perpetrator_name_label: "अपराधी का नाम:",
            review_perpetrator_relationship_label: "संबंध:",
            review_location_shared_label: "स्थान साझा किया गया:",
            review_city_town_label: "शहर/कस्बा:",
            review_exact_location_label: "सटीक स्थान:",
            review_evidence_label: "सबूत:",
            review_support_resources_label: "अनुरोधित सहायता संसाधन:",
            review_contact_method_label: "संपर्क विधि:",
            review_contact_details_label: "संपर्क विवरण:",
            review_not_provided: "प्रदान नहीं किया गया",
            review_yes: "हाँ",
            review_no: "नहीं",
            review_yes_approximate: "हाँ (अनुमानित)",
            review_none: "कोई नहीं",
            // Resources section translations in Hindi
            resources_title: "संसाधन और सहायता",
            resources_helplines_title: "हेल्पलाइन और हॉटलाइन",
            resources_helplines_women: "राष्ट्रीय महिला हेल्पलाइन: 1091 (भारत) - संकट में महिलाओं के लिए 24/7 सहायता।",
            resources_helplines_childline: "चाइल्डलाइन इंडिया: 1098 - देखभाल और सुरक्षा की आवश्यकता वाले बच्चों के लिए।",
            resources_helplines_cyber_crime: "साइबर क्राइम हेल्पलाइन (भारत): 1930 / 155260 - महिलाओं और बच्चों के खिलाफ साइबर अपराधों की रिपोर्ट के लिए।",
            resources_helplines_police: "महिला सुरक्षा सेल / पुलिस हेल्पलाइन: 112 (अखिल भारतीय आपातकाल) - एकीकृत आपातकालीन सेवाएं।",
            resources_legal_title: "कानूनी सहायता और अधिकार",
            resources_legal_nalsa: "राष्ट्रीय कानूनी सेवा प्राधिकरण (NALSA) (भारत): समाज के कमजोर वर्गों को मुफ्त कानूनी सेवाएं प्रदान करता है।",
            resources_legal_slsa: "राज्य कानूनी सेवा प्राधिकरण (SLSAs): स्थानीय सहायता के लिए अपने राज्य के कानूनी सेवा प्राधिकरण से संपर्क करें।",
            resources_legal_dlsa: "जिला कानूनी सेवा प्राधिकरण (DLSAs): जिला स्तर पर कानूनी सहायता के लिए।",
            resources_legal_advocates: "महिला अधिकार अधिवक्ता: भारत में महिलाओं के अधिकारों में विशेषज्ञता रखने वाले NGOs और कानूनी संगठनों से जुड़ें।",
            resources_legal_rights_info: "अपने अधिकारों को समझना: भारतीय दंड संहिता (IPC) और अन्य संबंधित अधिनियमों के तहत घरेलू हिंसा, यौन उत्पीड़न और हमले से संबंधित कानूनों की जानकारी।",
            resources_counseling_title: "परामर्श और मानसिक स्वास्थ्य",
            resources_counseling_govt: "सरकारी परामर्श केंद्र: कई राज्य सरकारें मुफ्त या सब्सिडी वाली परामर्श सेवाएं प्रदान करती हैं।",
            resources_counseling_ngos: "NGOs और सहायता समूह: स्नेहा (चेन्नई) या संगठ (गोवा) जैसे संगठन मानसिक स्वास्थ्य सहायता प्रदान करते हैं। अपने शहर में स्थानीय NGOs खोजें।",
            resources_counseling_online: "ऑनलाइन परामर्श प्लेटफॉर्म (भारत-आधारित): भारत में लाइसेंसशुदा चिकित्सकों से जुड़ने वाले प्लेटफॉर्म खोजें।",
            resources_counseling_trauma: "ट्रामा-इन्फॉर्म्ड केयर: भारत में ट्रामा रिकवरी में विशेषज्ञता रखने वाले मानसिक स्वास्थ्य पेशेवरों की तलाश करें।",
            resources_self_defense_title: "आत्मरक्षा और सुरक्षा टिप्स",
            resources_self_defense_academies: "स्थानीय आत्मरक्षा अकादमियां: भारत के कई शहर विशेष रूप से महिलाओं के लिए आत्मरक्षा कक्षाएं प्रदान करते हैं।",
            resources_self_defense_police: "पुलिस-नेतृत्व आत्मरक्षा कार्यक्रम: कुछ पुलिस विभाग महिलाओं की सुरक्षा के लिए कार्यशालाएं आयोजित करते हैं।",
            resources_self_defense_awareness: "जागरूकता और रोकथाम: सतर्क रहें, अकेले स्थानों से बचें, और अपनी सहज बुद्धि पर भरोसा करें।",
            resources_self_defense_apps: "सुरक्षा ऐप्स (भारतीय संदर्भ): 'हिम्मत प्लस' (दिल्ली पुलिस), 'रक्षा', या 'VithU' जैसे ऐप्स आपातकाल में उपयोगी हो सकते हैं।",
            resources_self_defense_preparedness: "आपातकालीन तैयारी: विश्वसनीय संपर्कों के साथ अपना लाइव स्थान साझा करें, आपातकालीन नंबरों को स्पीड डायल पर रखें, और अपने निकटतम सुरक्षित स्थानों को जानें।",
            // Emergency contacts translations in Hindi
            emergency_contacts_title: "आपातकालीन संपर्क",
            emergency_police_title: "पुलिस आपातकाल",
            emergency_police_info: "(अखिल भारतीय आपातकालीन नंबर)",
            emergency_women_helpline_title: "राष्ट्रीय महिला हेल्पलाइन",
            emergency_women_helpline_info: "(संकट में महिलाओं के लिए)",
            emergency_fire_title: "अग्निशमन सेवाएं",
            emergency_fire_info: "(आग की आपातकाल के लिए)",
            emergency_ambulance_title: "एम्बुलेंस सेवाएं",
            emergency_ambulance_info: "(चिकित्सा आपातकाल)",
            emergency_childline_title: "चाइल्डलाइन इंडिया",
            emergency_childline_info: "(जरूरतमंद बच्चों के लिए)",
            emergency_disaster_title: "आपदा प्रबंधन",
            emergency_disaster_info: "(राष्ट्रीय आपदा प्रतिक्रिया बल)",
            // Footer and stats in Hindi
            footer_copyright: "© 2025 शक्ति शील्ड। सभी अधिकार सुरक्षित। आपकी सुरक्षा हमारी प्राथमिकता है।",
            stats_reports: "दर्ज की गई रिपोर्ट्स",
            stats_helped: "सहायता प्राप्त लोग",
            stats_response: "प्रतिक्रिया समय",
            // Chatbot translations in Hindi
            chatbot_name: "शक्ति सहायक",
            chatbot_status: "ऑनलाइन • हमेशा आपकी मदद के लिए",
            chatbot_welcome: "नमस्ते! मैं शक्ति सहायक हूँ। मैं यहाँ आपकी मदद के लिए हूँ। आप मुझसे कुछ भी पूछ सकते हैं - कानूनी सलाह, भावनात्मक सहारा, या आपातकालीन मदद।",
            chatbot_emergency: "आपातकाल",
            chatbot_legal: "कानूनी सलाह",
            chatbot_support: "भावनात्मक सहारा",
            chatbot_input_placeholder: "अपना संदेश लिखें...",
            // Advanced chatbot features in Hindi
            chatbot_suggestions: "स्मार्ट सुझाव:",
            chatbot_recording: "रिकॉर्डिंग... अब बोलें",
            chatbot_typing: "शक्ति सहायक टाइप कर रहा है...",
            chatbot_voice_output: "आवाज़ आउटपुट",
            chatbot_smart_suggestions: "स्मार्ट सुझाव",
            chatbot_voice_not_supported: "इस ब्राउज़र में वॉइस इनपुट समर्थित नहीं है",
            chatbot_voice_permission_denied: "माइक्रोफ़ोन की अनुमति नकारी गई",
            chatbot_voice_error: "आवाज़ पहचान त्रुटि",
            chatbot_listening: "सुन रहा है...",
            chatbot_processing: "आपकी आवाज़ को प्रोसेस कर रहा है...",
            // Emergency system translations in Hindi
            emergency_contacts_title: "आपातकालीन संपर्क",
            share_location_title: "अपना स्थान साझा करें",
            getting_location: "आपका स्थान प्राप्त कर रहे हैं...",
            emergency_info: "आपातकालीन सेवाओं को कॉल करते समय आपका स्थान स्वचालित रूप से साझा हो जाएगा।",
            // Community features in Hindi
            community_title: "सामुदायिक सहायता",
            support_groups_title: "सहायता समूह",
            support_groups_desc: "उन महिलाओं के साथ गुमनाम सहायता समूहों में शामिल हों जो आपके अनुभवों को समझती हैं।",
            peer_chat_title: "साथी चैट",
            peer_chat_desc: "गोपनीय बातचीत के लिए प्रशिक्षित साथी समर्थकों से जुड़ें।",
            wellness_title: "कल्याण संसाधन",
            wellness_desc: "मानसिक स्वास्थ्य संसाधन, ध्यान गाइड और स्व-देखभाल युक्तियों तक पहुंच।",
            join_group: "समूह में शामिल हों",
            start_chat: "चैट शुरू करें",
            explore_resources: "संसाधन खोजें",
            community_stats: "सामुदायिक प्रभाव",
            active_supporters: "सक्रिय समर्थक",
            support_sessions: "सहायता सत्र",
            women_helped: "महिलाओं की मदद की",
            success_stories: "सफलता की कहानियां",
        }
    };
    let currentLanguage = localStorage.getItem('shaktishieldLanguage') || 'en';

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[currentLanguage][key]) {
                el.innerHTML = translations[currentLanguage][key];
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (translations[currentLanguage][key]) {
                el.placeholder = translations[currentLanguage][key];
            }
        });
        document.title = translations[currentLanguage].page_title;
        document.querySelectorAll('#language-switcher, #mobile-language-switcher').forEach(s => s.value = currentLanguage);
        populateReviewDetails();
    }
    
    // --- Initial Setup ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const languageSwitchers = document.querySelectorAll('#language-switcher, #mobile-language-switcher');
    const statusNotification = document.getElementById('status-notification');
    const notificationMessage = document.getElementById('notification-message');
    const notificationIcon = statusNotification.querySelector('i');
    
    // --- Event Listeners ---
    mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    languageSwitchers.forEach(s => s.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        localStorage.setItem('shaktishieldLanguage', currentLanguage);
        applyTranslations();
    }));

    function showNotification(messageKey, type = 'success') {
        const message = translations[currentLanguage][messageKey] || messageKey;
        notificationMessage.textContent = message;
        statusNotification.className = 'notification'; // Reset classes
        notificationIcon.className = 'fas';
        
        if (type === 'success') {
            statusNotification.classList.add('success', 'show');
            notificationIcon.classList.add('fa-check-circle');
        } else {
            statusNotification.classList.add('error', 'show');
            notificationIcon.classList.add('fa-times-circle');
        }
        setTimeout(() => statusNotification.classList.remove('show'), 5000);
    }

    // --- Report Form Logic ---
    const reportForm = document.getElementById('report-form');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const progressBarFill = document.getElementById('progress-fill');
    const tabIds = ['incident', 'location', 'additional', 'review'];
    let currentTabIndex = 0;

    function showTab(tabId) {
        currentTabIndex = tabIds.indexOf(tabId);
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(`${tabId}-tab`).classList.add('active');
        
        tabButtons.forEach(btn => {
            btn.classList.remove('text-purple-600', 'border-purple-600');
            btn.classList.add('text-gray-500');
            if (btn.dataset.tab === tabId) {
                btn.classList.add('text-purple-600', 'border-purple-600');
                btn.classList.remove('text-gray-500');
            }
        });
        
        progressBarFill.style.width = `${((currentTabIndex + 1) / tabIds.length) * 100}%`;
        if (tabId === 'review') populateReviewDetails();
    }

    function validateTab(tabId) {
        if (tabId === 'incident') {
            if (!document.getElementById('incident-type').value || !document.getElementById('incident-time').value || !document.getElementById('incident-description').value.trim()) {
                showNotification('notification_error_required_fields', 'error');
                return false;
            }
        } else if (tabId === 'location') {
            if (!document.getElementById('location-city').value.trim()) {
                showNotification('notification_error_city_town', 'error');
                return false;
            }
        } else if (tabId === 'additional') {
            const contactMethod = document.getElementById('contact-method').value;
            const alternativeContact = document.getElementById('alternative-contact').value.trim();
            if (contactMethod !== 'anonymous' && !alternativeContact) {
                showNotification('notification_error_contact_details', 'error');
                return false;
            }
        }
        return true;
    }

    reportForm.addEventListener('click', (e) => {
        if (e.target.matches('.next-btn')) {
            const currentTabId = tabIds[currentTabIndex];
            if (validateTab(currentTabId)) {
                const nextTabId = e.target.dataset.next;
                if (nextTabId) showTab(nextTabId);
            }
        } else if (e.target.matches('.prev-btn')) {
            const prevTabId = e.target.dataset.prev;
            if (prevTabId) showTab(prevTabId);
        }
    });

    // Form Submission
    reportForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const reportData = {
            incident: {
                type: document.getElementById('incident-type').value, time: document.getElementById('incident-time').value,
                description: document.getElementById('incident-description').value, knowPerpetrator: document.getElementById('know-perpetrator').checked,
                perpetratorName: document.getElementById('perpetrator-name').value, perpetratorRelationship: document.getElementById('perpetrator-relationship').value
            },
            location: {
                useCurrentLocation: document.getElementById('use-current-location').checked, city: document.getElementById('location-city').value,
                details: document.getElementById('location-details').value, latitude: window.__geoLat || null, longitude: window.__geoLng || null
            },
            additionalInfo: {
                evidence: { photos: document.getElementById('evidence-photos').checked, videos: document.getElementById('evidence-videos').checked, messages: document.getElementById('evidence-messages').checked, witnesses: document.getElementById('evidence-witnesses').checked },
                supportResources: { counseling: document.getElementById('support-counseling').checked, legal: document.getElementById('support-legal').checked, shelter: document.getElementById('support-shelter').checked },
                contactMethod: document.getElementById('contact-method').value, alternativeContact: document.getElementById('alternative-contact').value
            }
        };

        try {
            const response = await fetch('/api/reports', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reportData)
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const result = await response.json();
            if (result.success) {
                showNotification('notification_success_submit', 'success');
                alert("Report submitted successfully! Your report ID is " + result.reportId);
                reportForm.reset();
                showTab('incident');
                document.getElementById('perpetrator-details').classList.add('hidden');
                document.getElementById('contact-details').classList.add('hidden');
            }
        } catch (error) {
            console.error("Submission failed:", error);
            showNotification('An error occurred while submitting.', 'error');
        }
    });

    // Dynamic UI elements
    document.getElementById('know-perpetrator').addEventListener('change', (e) => {
        document.getElementById('perpetrator-details').classList.toggle('hidden', !e.target.checked);
    });
    document.getElementById('contact-method').addEventListener('change', (e) => {
        document.getElementById('contact-details').classList.toggle('hidden', e.target.value === 'anonymous');
    });
    document.getElementById('use-current-location').addEventListener('change', (e) => {
        if(e.target.checked && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                window.__geoLat = pos.coords.latitude;
                window.__geoLng = pos.coords.longitude;
            }, err => console.warn(`Geolocation ERROR(${err.code}): ${err.message}`));
        } else {
            window.__geoLat = null; window.__geoLng = null;
        }
    });
    
    // Populate Review Details
    function populateReviewDetails() {
        try {
            const getVal = id => {
                const element = document.getElementById(id);
                return element ? (element.value || translations[currentLanguage].review_not_provided) : translations[currentLanguage].review_not_provided;
            };
            const isChecked = id => {
                const element = document.getElementById(id);
                return element ? element.checked : false;
            };
            
            // Safely update review elements if they exist
            const updateElement = (id, value) => {
                const element = document.getElementById(id);
                if (element) element.textContent = value;
            };
            
            updateElement('review-incident-type', getVal('incident-type'));
            updateElement('review-incident-time', getVal('incident-time'));
            updateElement('review-incident-description', getVal('incident-description'));
            updateElement('review-know-perpetrator', isChecked('know-perpetrator') ? translations[currentLanguage].review_yes : translations[currentLanguage].review_no);
            updateElement('review-location-city', getVal('location-city'));
        } catch (error) {
            console.log('Review details update skipped - elements not found');
        }
    }

    // Initial load
    console.log('ShaktiShield: Initializing application...');
    applyTranslations();
    console.log('ShaktiShield: Language system initialized');
    if(document.getElementById('use-current-location').checked && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => { window.__geoLat = pos.coords.latitude; window.__geoLng = pos.coords.longitude; });
    }

    // Populate homepage counters (Reports Filed, People Helped)
    fetch('/api/stats')
        .then(r => r.ok ? r.json() : Promise.reject())
        .then(stats => {
            const totalEl = document.getElementById('totalReportsCount');
            const helpedEl = document.getElementById('resolvedReportsCount');
            if (totalEl) totalEl.textContent = (stats && typeof stats.totalReports === 'number') ? String(stats.totalReports) : '0';
            if (helpedEl) helpedEl.textContent = (stats && (typeof stats.peopleHelped === 'number' || typeof stats.resolved === 'number')) ? String(stats.peopleHelped ?? stats.resolved) : '0';
        })
        .catch(() => {
            const totalEl = document.getElementById('totalReportsCount');
            const helpedEl = document.getElementById('resolvedReportsCount');
            if (totalEl && !totalEl.textContent) totalEl.textContent = '0';
            if (helpedEl && !helpedEl.textContent) helpedEl.textContent = '0';
        });

    // Enhanced floating language toggle with smooth transitions
    const langToggle = document.getElementById('lang-toggle');
    console.log('ShaktiShield: Language toggle button found:', !!langToggle);
    
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            console.log('ShaktiShield: Language toggle clicked!');
            const current = localStorage.getItem('shaktishieldLanguage') || 'en';
            const next = current === 'en' ? 'hi' : 'en';
            console.log('ShaktiShield: Switching language from', current, 'to', next);
            
            localStorage.setItem('shaktishieldLanguage', next);
            
            // Add smooth transition effect
            document.body.style.transition = 'opacity 0.3s ease';
            document.body.style.opacity = '0.7';
            
            setTimeout(() => {
                currentLanguage = next;
                applyTranslations();
                
                // Update language switchers
                document.querySelectorAll('#language-switcher, #mobile-language-switcher').forEach(s => s.value = next);
                
                // Restore opacity
                document.body.style.opacity = '1';
                
                // Show notification about language change
                const message = next === 'hi' ? 'भाषा हिंदी में बदल दी गई' : 'Language changed to English';
                showNotification(message, 'success');
                console.log('ShaktiShield: Language switched successfully to', next);
            }, 150);
        });
        console.log('ShaktiShield: Language toggle event listener attached');
    } else {
        console.error('ShaktiShield: Language toggle button not found!');
    }

    // ===== AI CHATBOT ASSISTANT FUNCTIONALITY =====
    
    // Chatbot Knowledge Base with Trauma-Informed Responses
    const chatbotKnowledge = {
        en: {
            emergency: {
                triggers: ['emergency', 'help', 'danger', 'urgent', 'scared', 'threat', 'attack', 'violence'],
                responses: [
                    "🚨 I understand you're in an emergency situation. Your safety is the priority. Here are immediate steps:\n\n1. If you're in immediate danger, call 100 (Police) or 112 (Emergency)\n2. Move to a safe location if possible\n3. Contact a trusted person\n\nWould you like me to help you with anything specific right now?",
                    "I'm here to help you through this emergency. Please remember:\n\n• You are not alone\n• This is not your fault\n• Help is available\n\nEmergency Numbers:\n🚔 Police: 100\n👩‍⚕️ Women's Helpline: 1091\n🏥 Medical Emergency: 102\n\nWhat immediate support do you need?"
                ]
            },
            legal: {
                triggers: ['legal', 'law', 'rights', 'police', 'court', 'lawyer', 'fir', 'case', 'complaint'],
                responses: [
                    "I can help you understand your legal rights. Here's what you should know:\n\n📋 **Your Rights:**\n• Right to file a complaint (FIR)\n• Right to free legal aid\n• Right to privacy and dignity\n• Right to medical examination\n\n🏛️ **Legal Support:**\n• NALSA provides free legal services\n• Women's police stations available\n• Special courts for women's cases\n\nWhat specific legal information do you need?",
                    "Legal support is available to you. Important points:\n\n✅ **You can:**\n• File a complaint at any police station\n• Request a female police officer\n• Get free legal aid through DLSA\n• Seek protection orders\n\n📞 **Legal Helplines:**\n• Legal Services Authority: Contact your local DLSA\n• Women's Rights Organizations\n\nWould you like help with filing a complaint or understanding the legal process?"
                ]
            },
            support: {
                triggers: ['sad', 'depressed', 'anxious', 'scared', 'alone', 'hurt', 'trauma', 'counseling', 'therapy'],
                responses: [
                    "I hear you, and I want you to know that your feelings are completely valid. What you're experiencing is a normal response to difficult situations.\n\n💙 **Remember:**\n• You are stronger than you know\n• Healing takes time, and that's okay\n• You deserve support and care\n\n🤝 **Support Available:**\n• Free counseling services\n• Support groups\n• Crisis helplines\n• Online therapy options\n\nWould you like me to help you find local counseling services?",
                    "Thank you for reaching out. It takes courage to ask for help, and I'm proud of you for taking this step.\n\n🌟 **You are not alone:**\n• Many people have walked this path\n• Professional help is available\n• Recovery is possible\n\n📞 **Immediate Support:**\n• Crisis helplines available 24/7\n• Online chat counseling\n• Local support groups\n\nWhat kind of emotional support would be most helpful for you right now?"
                ]
            },
            general: {
                responses: [
                    "I'm here to support you. I can help with:\n\n🚨 Emergency assistance\n⚖️ Legal guidance\n💙 Emotional support\n📋 Filing reports\n📞 Finding resources\n\nWhat would you like to know more about?",
                    "Thank you for reaching out to Shakti Sahayak. I'm designed to provide trauma-informed support. I can assist with:\n\n• Understanding your rights\n• Emergency procedures\n• Emotional support\n• Connecting you with resources\n• Helping with safety planning\n\nHow can I help you today?"
                ]
            }
        },
        hi: {
            emergency: {
                triggers: ['आपातकाल', 'मदद', 'खतरा', 'डर', 'हमला', 'हिंसा', 'बचाओ', 'तुरंत'],
                responses: [
                    "🚨 मैं समझ रहा हूँ कि आप आपातकालीन स्थिति में हैं। आपकी सुरक्षा सबसे महत्वपूर्ण है। तुरंत करें:\n\n1. यदि तत्काल खतरा है तो 100 (पुलिस) या 112 (आपातकाल) पर कॉल करें\n2. यदि संभव हो तो सुरक्षित स्थान पर जाएं\n3. किसी विश्वसनीय व्यक्ति से संपर्क करें\n\nक्या आप चाहेंगे कि मैं अभी किसी विशिष्ट चीज़ में आपकी मदद करूं?",
                    "मैं इस आपातकाल में आपकी मदद के लिए यहाँ हूँ। कृपया याद रखें:\n\n• आप अकेले नहीं हैं\n• यह आपकी गलती नहीं है\n• मदद उपलब्ध है\n\nआपातकालीन नंबर:\n🚔 पुलिस: 100\n👩‍⚕️ महिला हेल्पलाइन: 1091\n🏥 मेडिकल इमरजेंसी: 102\n\nआपको तुरंत किस सहायता की आवश्यकता है?"
                ]
            },
            legal: {
                triggers: ['कानूनी', 'कानून', 'अधिकार', 'पुलिस', 'अदालत', 'वकील', 'एफआईआर', 'केस', 'शिकायत'],
                responses: [
                    "मैं आपके कानूनी अधिकारों को समझने में मदद कर सकता हूँ। यह जानना जरूरी है:\n\n📋 **आपके अधिकार:**\n• शिकायत दर्ज करने का अधिकार (FIR)\n• मुफ्त कानूनी सहायता का अधिकार\n• गोपनीयता और सम्मान का अधिकार\n• मेडिकल जांच का अधिकार\n\n🏛️ **कानूनी सहायता:**\n• NALSA मुफ्त कानूनी सेवाएं प्रदान करता है\n• महिला पुलिस स्टेशन उपलब्ध हैं\n• महिलाओं के लिए विशेष अदालतें\n\nआपको किस विशिष्ट कानूनी जानकारी की आवश्यकता है?",
                    "कानूनी सहायता आपके लिए उपलब्ध है। महत्वपूर्ण बातें:\n\n✅ **आप कर सकते हैं:**\n• किसी भी पुलिस स्टेशन में शिकायत दर्ज करना\n• महिला पुलिस अधिकारी की मांग करना\n• DLSA के माध्यम से मुफ्त कानूनी सहायता पाना\n• सुरक्षा आदेश मांगना\n\n📞 **कानूनी हेल्पलाइन:**\n• कानूनी सेवा प्राधिकरण: अपने स्थानीय DLSA से संपर्क करें\n• महिला अधिकार संगठन\n\nक्या आप शिकायत दर्ज करने या कानूनी प्रक्रिया समझने में मदद चाहते हैं?"
                ]
            },
            support: {
                triggers: ['उदास', 'परेशान', 'चिंतित', 'डरा हुआ', 'अकेला', 'दुखी', 'परामर्श', 'थेरेपी', 'मदद'],
                responses: [
                    "मैं आपकी बात सुन रहा हूँ, और मैं चाहता हूँ कि आप जानें कि आपकी भावनाएं पूरी तरह से वैध हैं। आप जो अनुभव कर रहे हैं वह कठिन परिस्थितियों की एक सामान्य प्रतिक्रिया है।\n\n💙 **याद रखें:**\n• आप जितना सोचते हैं उससे कहीं मजबूत हैं\n• ठीक होने में समय लगता है, और यह ठीक है\n• आप सहायता और देखभाल के हकदार हैं\n\n🤝 **उपलब्ध सहायता:**\n• मुफ्त परामर्श सेवाएं\n• सहायता समूह\n• क्राइसिस हेल्पलाइन\n• ऑनलाइन थेरेपी विकल्प\n\nक्या आप चाहेंगे कि मैं स्थानीय परामर्श सेवाएं खोजने में आपकी मदद करूं?",
                    "मुझसे संपर्क करने के लिए धन्यवाद। मदद मांगने में हिम्मत लगती है, और इस कदम को उठाने के लिए मुझे आप पर गर्व है।\n\n🌟 **आप अकेले नहीं हैं:**\n• कई लोग इस राह पर चले हैं\n• पेशेवर मदद उपलब्ध है\n• रिकवरी संभव है\n\n📞 **तत्काल सहायता:**\n• 24/7 क्राइसिस हेल्पलाइन उपलब्ध\n• ऑनलाइन चैट परामर्श\n• स्थानीय सहायता समूह\n\nअभी आपके लिए किस प्रकार की भावनात्मक सहायता सबसे उपयोगी होगी?"
                ]
            },
            general: {
                responses: [
                    "मैं आपकी सहायता के लिए यहाँ हूँ। मैं इनमें मदद कर सकता हूँ:\n\n🚨 आपातकालीन सहायता\n⚖️ कानूनी मार्गदर्शन\n💙 भावनात्मक सहारा\n📋 रिपोर्ट दर्ज करना\n📞 संसाधन खोजना\n\nआप किस बारे में और जानना चाहेंगे?",
                    "शक्ति सहायक से संपर्क करने के लिए धन्यवाद। मैं ट्रामा-इन्फॉर्म्ड सहायता प्रदान करने के लिए डिज़ाइन किया गया हूँ। मैं इनमें सहायता कर सकता हूँ:\n\n• आपके अधिकारों को समझना\n• आपातकालीन प्रक्रियाएं\n• भावनात्मक सहारा\n• संसाधनों से जुड़ना\n• सुरक्षा योजना बनाने में मदद\n\nआज मैं आपकी कैसे मदद कर सकता हूँ?"
                ]
            }
        }
    };

    // Advanced Chatbot State Management
    let chatbotOpen = false;
    let conversationHistory = [];
    let messageCount = 0;
    let isRecording = false;
    let recognition = null;
    let speechSynthesis = window.speechSynthesis;
    let voiceOutputEnabled = true;
    let smartSuggestionsEnabled = true;
    let currentEmotion = 'neutral';
    let typingTimeout = null;

    // Chatbot Elements
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const quickActionBtns = document.querySelectorAll('.quick-action-btn');
    
    // Advanced Elements
    const voiceInputBtn = document.getElementById('voice-input-btn');
    const voiceOutputToggle = document.getElementById('voice-output-toggle');
    const voiceRecording = document.getElementById('voice-recording');
    const stopRecording = document.getElementById('stop-recording');
    const userTyping = document.getElementById('user-typing');
    const smartSuggestions = document.getElementById('smart-suggestions');
    const suggestionButtons = document.getElementById('suggestion-buttons');
    const autocompleteDropdown = document.getElementById('autocomplete-dropdown');
    const messageCountEl = document.getElementById('message-count');
    const voiceOutputEnabledCb = document.getElementById('voice-output-enabled');
    const smartSuggestionsEnabledCb = document.getElementById('smart-suggestions-enabled');

    // Smart Suggestions Database
    const smartSuggestionsDB = {
        en: {
            emergency: ["I need immediate help", "Someone is following me", "I'm in danger", "Call police"],
            legal: ["What are my rights?", "How to file FIR?", "Legal aid options", "Court procedures"],
            support: ["I feel scared", "Need emotional support", "Counseling services", "Support groups"],
            general: ["How can you help?", "What services available?", "Emergency contacts", "Safety tips"]
        },
        hi: {
            emergency: ["मुझे तुरंत मदद चाहिए", "कोई मेरा पीछा कर रहा है", "मैं खतरे में हूँ", "पुलिस को बुलाएं"],
            legal: ["मेरे अधिकार क्या हैं?", "FIR कैसे दर्ज करें?", "कानूनी सहायता विकल्प", "अदालती प्रक्रिया"],
            support: ["मुझे डर लग रहा है", "भावनात्मक सहारा चाहिए", "परामर्श सेवाएं", "सहायता समूह"],
            general: ["आप कैसे मदद कर सकते हैं?", "कौन सी सेवाएं उपलब्ध हैं?", "आपातकालीन संपर्क", "सुरक्षा टिप्स"]
        }
    };

    // Auto-complete suggestions
    const autocompleteSuggestions = {
        en: [
            "I need help with", "What are my legal rights", "How to file a complaint", 
            "Emergency contact numbers", "Counseling services near me", "Safety tips for women",
            "Domestic violence help", "Sexual harassment laws", "Police complaint procedure"
        ],
        hi: [
            "मुझे मदद चाहिए", "मेरे कानूनी अधिकार क्या हैं", "शिकायत कैसे दर्ज करें",
            "आपातकालीन संपर्क नंबर", "मेरे पास परामर्श सेवाएं", "महिलाओं के लिए सुरक्षा टिप्स",
            "घरेलू हिंसा सहायता", "यौन उत्पीड़न कानून", "पुलिस शिकायत प्रक्रिया"
        ]
    };

    // Initialize Advanced Chatbot Features
    console.log('ShaktiShield: Initializing advanced chatbot...', {
        toggle: !!chatbotToggle,
        window: !!chatbotWindow,
        messages: !!chatMessages,
        input: !!chatInput,
        send: !!chatSend,
        voiceInput: !!voiceInputBtn,
        voiceOutput: !!voiceOutputToggle
    });

    // Initialize Speech Recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-US';
        
        recognition.onstart = () => {
            console.log('ShaktiShield: Voice recognition started');
            isRecording = true;
            voiceInputBtn.classList.add('voice-input-active');
            voiceRecording.classList.remove('hidden');
        };
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            console.log('ShaktiShield: Voice input received:', transcript);
            chatInput.value = transcript;
            sendMessage();
        };
        
        recognition.onerror = (event) => {
            console.error('ShaktiShield: Voice recognition error:', event.error);
            stopVoiceRecording();
            showVoiceError(event.error);
        };
        
        recognition.onend = () => {
            console.log('ShaktiShield: Voice recognition ended');
            stopVoiceRecording();
        };
    }

    // Basic Event Listeners
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', toggleChatbot);
        console.log('ShaktiShield: Chatbot toggle button ready');
    }
    if (chatbotClose) {
        chatbotClose.addEventListener('click', closeChatbot);
    }
    if (chatSend) {
        chatSend.addEventListener('click', sendMessage);
    }
    
    // Advanced Input Handling
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        // Auto-complete functionality
        chatInput.addEventListener('input', handleAutoComplete);
        chatInput.addEventListener('focus', showSmartSuggestions);
        chatInput.addEventListener('blur', () => {
            setTimeout(() => hideAutoComplete(), 200);
        });
    }

    // Voice Input Button
    if (voiceInputBtn) {
        voiceInputBtn.addEventListener('click', toggleVoiceInput);
    }

    // Voice Output Toggle
    if (voiceOutputToggle) {
        voiceOutputToggle.addEventListener('click', toggleVoiceOutput);
    }

    // Stop Recording Button
    if (stopRecording) {
        stopRecording.addEventListener('click', stopVoiceRecording);
    }

    // Settings Checkboxes
    if (voiceOutputEnabledCb) {
        voiceOutputEnabledCb.addEventListener('change', (e) => {
            voiceOutputEnabled = e.target.checked;
            updateVoiceOutputButton();
        });
    }

    if (smartSuggestionsEnabledCb) {
        smartSuggestionsEnabledCb.addEventListener('change', (e) => {
            smartSuggestionsEnabled = e.target.checked;
            if (!smartSuggestionsEnabled) {
                hideSmartSuggestions();
            }
        });
    }

    // Quick Action Buttons
    quickActionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            handleQuickAction(action);
        });
    });

    // ===== ADVANCED CHATBOT FUNCTIONS =====

    function toggleChatbot() {
        console.log('ShaktiShield: Chatbot toggle clicked! Current state:', chatbotOpen);
        chatbotOpen = !chatbotOpen;
        if (chatbotOpen) {
            console.log('ShaktiShield: Opening chatbot window');
            chatbotWindow.classList.remove('hidden');
            chatbotWindow.classList.add('show');
            if (chatInput) chatInput.focus();
            updateMessageCount();
            showSmartSuggestions();
        } else {
            console.log('ShaktiShield: Closing chatbot window');
            closeChatbot();
        }
    }

    function closeChatbot() {
        chatbotOpen = false;
        chatbotWindow.classList.add('hidden');
        chatbotWindow.classList.remove('show');
        hideSmartSuggestions();
        hideAutoComplete();
        if (isRecording) stopVoiceRecording();
    }

    // Voice Input Functions
    function toggleVoiceInput() {
        if (!recognition) {
            showVoiceError('not-supported');
            return;
        }

        if (isRecording) {
            stopVoiceRecording();
        } else {
            startVoiceRecording();
        }
    }

    function startVoiceRecording() {
        try {
            recognition.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-US';
            recognition.start();
        } catch (error) {
            console.error('ShaktiShield: Error starting voice recognition:', error);
            showVoiceError('error');
        }
    }

    function stopVoiceRecording() {
        if (recognition && isRecording) {
            recognition.stop();
        }
        isRecording = false;
        voiceInputBtn.classList.remove('voice-input-active');
        voiceRecording.classList.add('hidden');
    }

    function showVoiceError(errorType) {
        let message = '';
        switch (errorType) {
            case 'not-supported':
                message = translations[currentLanguage].chatbot_voice_not_supported;
                break;
            case 'not-allowed':
                message = translations[currentLanguage].chatbot_voice_permission_denied;
                break;
            default:
                message = translations[currentLanguage].chatbot_voice_error;
        }
        
        addMessage(`❌ ${message}`, false);
    }

    // Voice Output Functions
    function toggleVoiceOutput() {
        voiceOutputEnabled = !voiceOutputEnabled;
        voiceOutputEnabledCb.checked = voiceOutputEnabled;
        updateVoiceOutputButton();
        
        const message = voiceOutputEnabled ? 
            (currentLanguage === 'hi' ? 'आवाज़ आउटपुट चालू' : 'Voice output enabled') :
            (currentLanguage === 'hi' ? 'आवाज़ आउटपुट बंद' : 'Voice output disabled');
        
        showNotification(message, 'info');
    }

    function updateVoiceOutputButton() {
        if (voiceOutputToggle) {
            if (voiceOutputEnabled) {
                voiceOutputToggle.classList.remove('voice-output-muted');
                voiceOutputToggle.innerHTML = '<i class="fas fa-volume-up text-sm"></i>';
            } else {
                voiceOutputToggle.classList.add('voice-output-muted');
                voiceOutputToggle.innerHTML = '<i class="fas fa-volume-mute text-sm"></i>';
            }
        }
    }

    function speakMessage(text) {
        if (!voiceOutputEnabled || !speechSynthesis) return;
        
        // Stop any ongoing speech
        speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-US';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 0.8;
        
        speechSynthesis.speak(utterance);
    }

    // Smart Suggestions Functions
    function showSmartSuggestions() {
        if (!smartSuggestionsEnabled || !smartSuggestions) return;
        
        const suggestions = getContextualSuggestions();
        if (suggestions.length === 0) return;
        
        suggestionButtons.innerHTML = '';
        suggestions.forEach(suggestion => {
            const btn = document.createElement('button');
            btn.className = 'suggestion-btn';
            btn.textContent = suggestion;
            btn.onclick = () => {
                chatInput.value = suggestion;
                sendMessage();
                hideSmartSuggestions();
            };
            suggestionButtons.appendChild(btn);
        });
        
        smartSuggestions.classList.remove('hidden');
    }

    function hideSmartSuggestions() {
        if (smartSuggestions) {
            smartSuggestions.classList.add('hidden');
        }
    }

    function getContextualSuggestions() {
        const suggestions = smartSuggestionsDB[currentLanguage];
        const recentMessages = conversationHistory.slice(-3);
        
        // Determine context based on recent conversation
        let context = 'general';
        for (const msg of recentMessages) {
            if (msg.content.toLowerCase().includes('emergency') || msg.content.includes('आपातकाल')) {
                context = 'emergency';
                break;
            } else if (msg.content.toLowerCase().includes('legal') || msg.content.includes('कानूनी')) {
                context = 'legal';
                break;
            } else if (msg.content.toLowerCase().includes('support') || msg.content.includes('सहारा')) {
                context = 'support';
                break;
            }
        }
        
        return suggestions[context] || suggestions.general;
    }

    // Auto-complete Functions
    function handleAutoComplete(e) {
        const value = e.target.value.toLowerCase();
        if (value.length < 2) {
            hideAutoComplete();
            return;
        }
        
        const suggestions = autocompleteSuggestions[currentLanguage].filter(
            suggestion => suggestion.toLowerCase().includes(value)
        );
        
        if (suggestions.length > 0) {
            showAutoComplete(suggestions);
        } else {
            hideAutoComplete();
        }
    }

    function showAutoComplete(suggestions) {
        if (!autocompleteDropdown) return;
        
        autocompleteDropdown.innerHTML = '';
        suggestions.slice(0, 5).forEach((suggestion, index) => {
            const div = document.createElement('div');
            div.className = 'autocomplete-item';
            div.textContent = suggestion;
            div.onclick = () => {
                chatInput.value = suggestion;
                hideAutoComplete();
                chatInput.focus();
            };
            autocompleteDropdown.appendChild(div);
        });
        
        autocompleteDropdown.classList.remove('hidden');
    }

    function hideAutoComplete() {
        if (autocompleteDropdown) {
            autocompleteDropdown.classList.add('hidden');
        }
    }

    // Message Count and Statistics
    function updateMessageCount() {
        if (messageCountEl) {
            const count = conversationHistory.filter(msg => msg.role === 'user').length;
            messageCountEl.textContent = `${count} messages`;
        }
    }

    // Emotion Detection (Simple keyword-based)
    function detectEmotion(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('scared') || lowerMessage.includes('afraid') || lowerMessage.includes('डर')) {
            return 'scared';
        } else if (lowerMessage.includes('angry') || lowerMessage.includes('mad') || lowerMessage.includes('गुस्सा')) {
            return 'angry';
        } else if (lowerMessage.includes('sad') || lowerMessage.includes('cry') || lowerMessage.includes('उदास')) {
            return 'sad';
        } else if (lowerMessage.includes('happy') || lowerMessage.includes('good') || lowerMessage.includes('खुश')) {
            return 'happy';
        }
        return 'neutral';
    }

    function addMessage(message, isUser = false, showTyping = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${isUser ? 'user-message' : 'bot-message'} mb-3 message-with-audio`;
        
        if (showTyping) {
            messageDiv.innerHTML = `
                <div class="flex items-start ${isUser ? 'justify-end' : ''}">
                    ${!isUser ? `
                        <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-2 mt-1">
                            <i class="fas fa-robot text-xs text-white"></i>
                        </div>
                    ` : ''}
                    <div class="typing-indicator">
                        <div class="typing-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Detect emotion for user messages
            const emotion = isUser ? detectEmotion(message) : 'neutral';
            const emotionIcon = getEmotionIcon(emotion);
            
            messageDiv.innerHTML = `
                <div class="flex items-start ${isUser ? 'justify-end' : ''}">
                    ${!isUser ? `
                        <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-2 mt-1">
                            <i class="fas fa-robot text-xs text-white"></i>
                        </div>
                    ` : ''}
                    <div class="bg-white p-3 rounded-lg shadow-sm max-w-xs relative">
                        ${isUser && emotion !== 'neutral' ? `
                            <div class="emotion-indicator emotion-${emotion}">
                                ${emotionIcon}
                            </div>
                        ` : ''}
                        <p class="text-sm whitespace-pre-line">${message}</p>
                        ${!isUser && voiceOutputEnabled ? `
                            <div class="audio-controls mt-2">
                                <button class="audio-play-btn" onclick="speakMessage('${message.replace(/'/g, "\\'")}')">
                                    <i class="fas fa-play"></i>
                                </button>
                                <span class="text-xs text-gray-500">Click to hear</span>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Auto-speak bot messages if voice output is enabled
        if (!isUser && !showTyping && voiceOutputEnabled) {
            setTimeout(() => speakMessage(message), 500);
        }
        
        return messageDiv;
    }

    function getEmotionIcon(emotion) {
        const icons = {
            happy: '😊',
            sad: '😢',
            angry: '😠',
            scared: '😰',
            neutral: '😐'
        };
        return icons[emotion] || icons.neutral;
    }

    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        // Hide suggestions and autocomplete
        hideSmartSuggestions();
        hideAutoComplete();

        // Add user message with emotion detection
        addMessage(message, true);
        conversationHistory.push({ role: 'user', content: message });
        messageCount++;
        
        // Clear input
        chatInput.value = '';
        
        // Update message count
        updateMessageCount();
        
        // Show typing indicator
        showTypingIndicator();
        const typingDiv = addMessage('', false, true);
        
        // Generate contextual smart suggestions for next interaction
        setTimeout(() => showSmartSuggestions(), 3000);
        
        // Generate AI response with realistic delay
        const responseDelay = 1000 + Math.random() * 1500;
        setTimeout(() => {
            hideTypingIndicator();
            typingDiv.remove();
            
            const response = generateAIResponse(message);
            addMessage(response, false);
            conversationHistory.push({ role: 'assistant', content: response });
            
            // Show contextual banner if needed
            showContextualBanner(message);
            
        }, responseDelay);
    }

    function showTypingIndicator() {
        if (userTyping) {
            userTyping.classList.remove('hidden');
        }
    }

    function hideTypingIndicator() {
        if (userTyping) {
            userTyping.classList.add('hidden');
        }
    }

    function showContextualBanner(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        let bannerMessage = '';
        let bannerIcon = '';
        
        if (lowerMessage.includes('emergency') || lowerMessage.includes('danger') || lowerMessage.includes('आपातकाल')) {
            bannerMessage = currentLanguage === 'hi' ? 
                '🚨 आपातकालीन स्थिति का पता चला। तुरंत सहायता के लिए 112 डायल करें।' :
                '🚨 Emergency situation detected. Dial 112 for immediate assistance.';
            bannerIcon = 'fas fa-exclamation-triangle';
        } else if (lowerMessage.includes('scared') || lowerMessage.includes('afraid') || lowerMessage.includes('डर')) {
            bannerMessage = currentLanguage === 'hi' ? 
                '💙 आप सुरक्षित हैं। मैं यहाँ आपकी मदद के लिए हूँ।' :
                '💙 You are safe. I am here to help you.';
            bannerIcon = 'fas fa-heart';
        }
        
        if (bannerMessage) {
            const banner = document.createElement('div');
            banner.className = 'smart-context-banner';
            banner.innerHTML = `
                <i class="${bannerIcon} context-icon"></i>
                <span>${bannerMessage}</span>
            `;
            chatMessages.appendChild(banner);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // Auto-remove banner after 10 seconds
            setTimeout(() => {
                if (banner.parentNode) {
                    banner.remove();
                }
            }, 10000);
        }
    }

    function generateAIResponse(userMessage) {
        const lang = currentLanguage;
        const knowledge = chatbotKnowledge[lang];
        const lowerMessage = userMessage.toLowerCase();
        
        // Check for emergency keywords first
        if (knowledge.emergency.triggers.some(trigger => lowerMessage.includes(trigger))) {
            return knowledge.emergency.responses[Math.floor(Math.random() * knowledge.emergency.responses.length)];
        }
        
        // Check for legal keywords
        if (knowledge.legal.triggers.some(trigger => lowerMessage.includes(trigger))) {
            return knowledge.legal.responses[Math.floor(Math.random() * knowledge.legal.responses.length)];
        }
        
        // Check for support keywords
        if (knowledge.support.triggers.some(trigger => lowerMessage.includes(trigger))) {
            return knowledge.support.responses[Math.floor(Math.random() * knowledge.support.responses.length)];
        }
        
        // Default general response
        return knowledge.general.responses[Math.floor(Math.random() * knowledge.general.responses.length)];
    }

    function handleQuickAction(action) {
        const lang = currentLanguage;
        const knowledge = chatbotKnowledge[lang];
        
        let response = '';
        switch (action) {
            case 'emergency':
                response = knowledge.emergency.responses[0];
                break;
            case 'legal':
                response = knowledge.legal.responses[0];
                break;
            case 'support':
                response = knowledge.support.responses[0];
                break;
            default:
                response = knowledge.general.responses[0];
        }
        
        // Show typing indicator
        const typingDiv = addMessage('', false, true);
        
        setTimeout(() => {
            typingDiv.remove();
            addMessage(response, false);
            conversationHistory.push({ role: 'assistant', content: response });
        }, 800);
    }

    // Initialize chatbot with welcome message based on current language
    function initializeChatbot() {
        try {
            if (chatMessages) {
                // Clear existing messages except welcome
                const existingMessages = chatMessages.querySelectorAll('.chat-message');
                existingMessages.forEach((msg, index) => {
                    if (index > 0) msg.remove(); // Keep first welcome message
                });
            }
        } catch (error) {
            console.log('Chatbot initialization skipped - elements not found');
        }
    }

    // Update chatbot language when language changes
    const originalApplyTranslations = applyTranslations;
    applyTranslations = function() {
        originalApplyTranslations();
        initializeChatbot();
    };

    // ===== EMERGENCY SAFETY FEATURES =====
    
    // Emergency System Elements
    const panicButton = document.getElementById('panic-button');
    const quickActionsMenu = document.getElementById('quick-actions-menu');
    const emergencyModal = document.getElementById('emergency-modal');
    const locationModal = document.getElementById('location-modal');
    const fakeCallModal = document.getElementById('fake-call-modal');
    
    // Emergency System State
    let emergencyMode = false;
    let userLocation = null;
    let safetyTimer = null;
    
    // Emergency Event Listeners
    if (panicButton) {
        panicButton.addEventListener('click', toggleEmergencyMenu);
    }
    
    // Quick Action Buttons
    document.getElementById('call-police')?.addEventListener('click', () => makeCall('100'));
    document.getElementById('send-location')?.addEventListener('click', shareLocation);
    document.getElementById('emergency-contacts')?.addEventListener('click', showEmergencyContacts);
    document.getElementById('fake-call')?.addEventListener('click', startFakeCall);
    
    // Modal Close Buttons
    document.getElementById('close-emergency-modal')?.addEventListener('click', () => {
        emergencyModal.classList.add('hidden');
    });
    document.getElementById('close-location-modal')?.addEventListener('click', () => {
        locationModal.classList.add('hidden');
    });
    document.getElementById('decline-fake-call')?.addEventListener('click', endFakeCall);
    document.getElementById('answer-fake-call')?.addEventListener('click', endFakeCall);
    
    // Emergency Functions
    function toggleEmergencyMenu() {
        const isVisible = !quickActionsMenu.classList.contains('hidden');
        if (isVisible) {
            quickActionsMenu.classList.add('hidden');
        } else {
            quickActionsMenu.classList.remove('hidden');
            // Auto-hide after 10 seconds
            setTimeout(() => {
                quickActionsMenu.classList.add('hidden');
            }, 10000);
        }
    }
    
    function makeCall(number) {
        // Create safety indicator
        showSafetyIndicator(`Calling ${number}...`);
        
        // In a real app, this would initiate a call
        // For demo, we'll show a confirmation
        const confirmation = confirm(`Call ${number}?\n\nThis will dial emergency services.`);
        if (confirmation) {
            // Simulate call initiation
            window.location.href = `tel:${number}`;
            
            // Log emergency action
            logEmergencyAction('call', number);
        }
        
        quickActionsMenu.classList.add('hidden');
    }
    
    function shareLocation() {
        locationModal.classList.remove('hidden');
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        accuracy: position.coords.accuracy
                    };
                    
                    displayLocationInfo(userLocation);
                    logEmergencyAction('location_share', userLocation);
                },
                (error) => {
                    showLocationError(error);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 60000
                }
            );
        } else {
            showLocationError({ code: 0, message: 'Geolocation not supported' });
        }
        
        quickActionsMenu.classList.add('hidden');
    }
    
    function displayLocationInfo(location) {
        const locationContent = document.getElementById('location-content');
        const googleMapsUrl = `https://www.google.com/maps?q=${location.lat},${location.lng}`;
        
        locationContent.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <i class="fas fa-map-marker-alt text-3xl text-green-600 mb-2"></i>
                    <p class="font-semibold">Location Retrieved Successfully</p>
                </div>
                
                <div class="bg-gray-50 p-3 rounded-lg">
                    <div class="text-sm space-y-1">
                        <div><strong>Latitude:</strong> ${location.lat.toFixed(6)}</div>
                        <div><strong>Longitude:</strong> ${location.lng.toFixed(6)}</div>
                        <div><strong>Accuracy:</strong> ±${Math.round(location.accuracy)}m</div>
                    </div>
                </div>
                
                <div class="space-y-2">
                    <button onclick="window.open('${googleMapsUrl}', '_blank')" 
                            class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                        <i class="fas fa-external-link-alt mr-2"></i>View on Google Maps
                    </button>
                    
                    <button onclick="shareLocationViaWhatsApp()" 
                            class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
                        <i class="fab fa-whatsapp mr-2"></i>Share via WhatsApp
                    </button>
                    
                    <button onclick="copyLocationToClipboard()" 
                            class="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition">
                        <i class="fas fa-copy mr-2"></i>Copy Location
                    </button>
                </div>
                
                <div class="text-xs text-gray-500 text-center">
                    <i class="fas fa-shield-alt mr-1"></i>
                    Your location is not stored on our servers
                </div>
            </div>
        `;
    }
    
    function showLocationError(error) {
        const locationContent = document.getElementById('location-content');
        let errorMessage = 'Unable to get your location.';
        
        switch(error.code) {
            case 1:
                errorMessage = 'Location access denied. Please enable location services.';
                break;
            case 2:
                errorMessage = 'Location unavailable. Please try again.';
                break;
            case 3:
                errorMessage = 'Location request timed out. Please try again.';
                break;
        }
        
        locationContent.innerHTML = `
            <div class="text-center py-4">
                <i class="fas fa-exclamation-triangle text-2xl text-red-600 mb-2"></i>
                <p class="text-red-600 font-semibold">Location Error</p>
                <p class="text-sm text-gray-600 mt-2">${errorMessage}</p>
                <button onclick="shareLocation()" 
                        class="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
                    <i class="fas fa-redo mr-2"></i>Try Again
                </button>
            </div>
        `;
    }
    
    function showEmergencyContacts() {
        emergencyModal.classList.remove('hidden');
        quickActionsMenu.classList.add('hidden');
    }
    
    function startFakeCall() {
        fakeCallModal.classList.remove('hidden');
        
        // Add ringing animation
        const fakeCallDiv = fakeCallModal.querySelector('.bg-gray-900');
        fakeCallDiv.classList.add('fake-call-ring');
        
        // Auto-end fake call after 30 seconds
        setTimeout(() => {
            endFakeCall();
        }, 30000);
        
        quickActionsMenu.classList.add('hidden');
        logEmergencyAction('fake_call', 'started');
    }
    
    function endFakeCall() {
        fakeCallModal.classList.add('hidden');
        const fakeCallDiv = fakeCallModal.querySelector('.bg-gray-900');
        fakeCallDiv.classList.remove('fake-call-ring');
        logEmergencyAction('fake_call', 'ended');
    }
    
    function showSafetyIndicator(message) {
        // Remove existing indicator
        const existing = document.querySelector('.safety-indicator');
        if (existing) existing.remove();
        
        // Create new indicator
        const indicator = document.createElement('div');
        indicator.className = 'safety-indicator';
        indicator.innerHTML = `
            <i class="fas fa-shield-alt mr-2"></i>
            ${message}
        `;
        
        document.body.appendChild(indicator);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (indicator.parentNode) {
                indicator.remove();
            }
        }, 5000);
    }
    
    function logEmergencyAction(action, data) {
        const timestamp = new Date().toISOString();
        const logEntry = {
            timestamp,
            action,
            data,
            userAgent: navigator.userAgent,
            location: userLocation
        };
        
        // In a real app, this would send to a secure server
        console.log('Emergency Action Logged:', logEntry);
        
        // Store locally for user's reference
        const emergencyLog = JSON.parse(localStorage.getItem('emergencyLog') || '[]');
        emergencyLog.push(logEntry);
        localStorage.setItem('emergencyLog', JSON.stringify(emergencyLog.slice(-50))); // Keep last 50 entries
    }
    
    // Helper functions for location sharing
    window.shareLocationViaWhatsApp = function() {
        if (userLocation) {
            const message = `🚨 Emergency Location Alert 🚨\n\nI need help! My current location is:\n\nLatitude: ${userLocation.lat}\nLongitude: ${userLocation.lng}\n\nGoogle Maps: https://www.google.com/maps?q=${userLocation.lat},${userLocation.lng}\n\nSent via ShaktiShield Safety App`;
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            logEmergencyAction('location_share_whatsapp', userLocation);
        }
    };
    
    window.copyLocationToClipboard = function() {
        if (userLocation) {
            const locationText = `Emergency Location:\nLatitude: ${userLocation.lat}\nLongitude: ${userLocation.lng}\nGoogle Maps: https://www.google.com/maps?q=${userLocation.lat},${userLocation.lng}`;
            
            navigator.clipboard.writeText(locationText).then(() => {
                showSafetyIndicator('Location copied to clipboard');
                logEmergencyAction('location_copy', userLocation);
            }).catch(() => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = locationText;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showSafetyIndicator('Location copied to clipboard');
            });
        }
    };
    
    // Initialize safety features on page load
    function initializeSafetyFeatures() {
        // Check if user has granted location permission
        if (navigator.permissions) {
            navigator.permissions.query({name: 'geolocation'}).then((result) => {
                if (result.state === 'granted') {
                    showSafetyIndicator('Location services enabled');
                }
            });
        }
        
        // Add keyboard shortcut for emergency (Ctrl+Shift+E)
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'E') {
                e.preventDefault();
                toggleEmergencyMenu();
                showSafetyIndicator('Emergency menu activated');
            }
        });
    }
    
    // Initialize safety features
    initializeSafetyFeatures();

    // ===== COMMUNITY SUPPORT FEATURES =====
    
    // Community Support Functions
    window.openSupportGroups = function() {
        showSafetyIndicator('Connecting to support groups...');
        
        // Simulate support group interface
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-6 m-4 max-w-md w-full modal-slide-up">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-bold text-purple-600">Support Groups</h3>
                    <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="space-y-3">
                    <div class="p-3 bg-purple-50 rounded-lg cursor-pointer hover:bg-purple-100 transition" onclick="joinGroup('survivors')">
                        <div class="font-semibold">Survivors Circle</div>
                        <div class="text-sm text-gray-600">24 members • Active now</div>
                        <div class="text-xs text-green-600 mt-1">
                            <i class="fas fa-circle mr-1"></i>Safe space for sharing experiences
                        </div>
                    </div>
                    <div class="p-3 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition" onclick="joinGroup('healing')">
                        <div class="font-semibold">Healing Journey</div>
                        <div class="text-sm text-gray-600">18 members • 3 online</div>
                        <div class="text-xs text-green-600 mt-1">
                            <i class="fas fa-circle mr-1"></i>Focus on recovery and growth
                        </div>
                    </div>
                    <div class="p-3 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition" onclick="joinGroup('empowerment')">
                        <div class="font-semibold">Empowerment Hub</div>
                        <div class="text-sm text-gray-600">31 members • 7 online</div>
                        <div class="text-xs text-green-600 mt-1">
                            <i class="fas fa-circle mr-1"></i>Building strength and confidence
                        </div>
                    </div>
                </div>
                <div class="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <div class="text-sm text-yellow-800">
                        <i class="fas fa-shield-alt mr-2"></i>
                        All groups are moderated and completely anonymous
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    };
    
    window.startPeerChat = function() {
        showSafetyIndicator('Finding available peer supporter...');
        
        setTimeout(() => {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
            modal.innerHTML = `
                <div class="bg-white rounded-lg p-6 m-4 max-w-md w-full modal-slide-up">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-bold text-blue-600">Peer Support Chat</h3>
                        <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="text-center py-4">
                        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-user-friends text-2xl text-blue-600"></i>
                        </div>
                        <h4 class="font-semibold mb-2">Connected to Priya</h4>
                        <p class="text-sm text-gray-600 mb-4">Trained peer supporter • Available now</p>
                        <div class="bg-blue-50 p-3 rounded-lg mb-4">
                            <p class="text-sm text-blue-800">
                                "Hi! I'm here to listen and support you. This is a safe, confidential space. How are you feeling today?"
                            </p>
                        </div>
                        <button onclick="startChatSession()" class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                            Start Conversation
                        </button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }, 1500);
    };
    
    window.openWellnessHub = function() {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-6 m-4 max-w-lg w-full modal-slide-up">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-bold text-green-600">Wellness Resources</h3>
                    <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div class="p-3 bg-green-50 rounded-lg text-center cursor-pointer hover:bg-green-100 transition" onclick="startMeditation()">
                        <i class="fas fa-leaf text-2xl text-green-600 mb-2"></i>
                        <div class="font-semibold text-sm">Guided Meditation</div>
                    </div>
                    <div class="p-3 bg-blue-50 rounded-lg text-center cursor-pointer hover:bg-blue-100 transition" onclick="openBreathingExercise()">
                        <i class="fas fa-wind text-2xl text-blue-600 mb-2"></i>
                        <div class="font-semibold text-sm">Breathing Exercise</div>
                    </div>
                    <div class="p-3 bg-purple-50 rounded-lg text-center cursor-pointer hover:bg-purple-100 transition" onclick="openJournal()">
                        <i class="fas fa-book text-2xl text-purple-600 mb-2"></i>
                        <div class="font-semibold text-sm">Digital Journal</div>
                    </div>
                    <div class="p-3 bg-pink-50 rounded-lg text-center cursor-pointer hover:bg-pink-100 transition" onclick="openSelfCare()">
                        <i class="fas fa-heart text-2xl text-pink-600 mb-2"></i>
                        <div class="font-semibold text-sm">Self-Care Tips</div>
                    </div>
                    <div class="p-3 bg-yellow-50 rounded-lg text-center cursor-pointer hover:bg-yellow-100 transition" onclick="openCrisisResources()">
                        <i class="fas fa-phone text-2xl text-yellow-600 mb-2"></i>
                        <div class="font-semibold text-sm">Crisis Helplines</div>
                    </div>
                    <div class="p-3 bg-indigo-50 rounded-lg text-center cursor-pointer hover:bg-indigo-100 transition" onclick="openSafetyPlan()">
                        <i class="fas fa-shield-alt text-2xl text-indigo-600 mb-2"></i>
                        <div class="font-semibold text-sm">Safety Planning</div>
                    </div>
                </div>
                <div class="mt-4 p-3 bg-gray-50 rounded-lg">
                    <div class="text-sm text-gray-600 text-center">
                        <i class="fas fa-heart mr-2 text-red-500"></i>
                        Your mental health matters. Take care of yourself.
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    };
    
    // Helper functions for community features
    window.joinGroup = function(groupType) {
        showSafetyIndicator(`Joining ${groupType} group...`);
        // Close modal
        document.querySelector('.fixed').remove();
        
        // Simulate joining group
        setTimeout(() => {
            showSafetyIndicator('Successfully joined support group!');
        }, 1000);
    };
    
    window.startChatSession = function() {
        showSafetyIndicator('Starting peer support session...');
        document.querySelector('.fixed').remove();
        
        // In a real app, this would open a secure chat interface
        setTimeout(() => {
            showSafetyIndicator('Chat session started. Stay safe!');
        }, 1000);
    };
    
    window.startMeditation = function() {
        showSafetyIndicator('Starting 5-minute guided meditation...');
        document.querySelector('.fixed').remove();
        
        // Simulate meditation session
        let timeLeft = 300; // 5 minutes
        const meditationTimer = setInterval(() => {
            timeLeft--;
            if (timeLeft <= 0) {
                clearInterval(meditationTimer);
                showSafetyIndicator('Meditation complete. Well done!');
            }
        }, 1000);
    };
    
    window.openBreathingExercise = function() {
        document.querySelector('.fixed').remove();
        
        const breathingModal = document.createElement('div');
        breathingModal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
        breathingModal.innerHTML = `
            <div class="bg-white rounded-lg p-8 m-4 max-w-md w-full text-center modal-slide-up">
                <h3 class="text-xl font-bold text-blue-600 mb-4">4-7-8 Breathing Exercise</h3>
                <div class="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 breathing-circle">
                    <div class="text-2xl font-bold text-blue-600" id="breathing-count">4</div>
                </div>
                <div class="text-lg font-semibold mb-2" id="breathing-instruction">Breathe In</div>
                <div class="text-sm text-gray-600 mb-4">Follow the circle and count</div>
                <button onclick="this.closest('.fixed').remove()" class="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition">
                    Close
                </button>
            </div>
        `;
        document.body.appendChild(breathingModal);
        
        // Start breathing exercise
        startBreathingCycle();
    };
    
    function startBreathingCycle() {
        const phases = [
            { text: 'Breathe In', count: 4, color: 'bg-blue-100' },
            { text: 'Hold', count: 7, color: 'bg-purple-100' },
            { text: 'Breathe Out', count: 8, color: 'bg-green-100' }
        ];
        
        let phaseIndex = 0;
        let count = phases[0].count;
        
        const countEl = document.getElementById('breathing-count');
        const instructionEl = document.getElementById('breathing-instruction');
        const circleEl = document.querySelector('.breathing-circle');
        
        const breathingInterval = setInterval(() => {
            if (count > 0) {
                countEl.textContent = count;
                count--;
            } else {
                phaseIndex = (phaseIndex + 1) % phases.length;
                const phase = phases[phaseIndex];
                count = phase.count;
                instructionEl.textContent = phase.text;
                circleEl.className = `w-32 h-32 ${phase.color} rounded-full flex items-center justify-center mx-auto mb-6 breathing-circle`;
            }
        }, 1000);
        
        // Stop after 2 minutes
        setTimeout(() => {
            clearInterval(breathingInterval);
        }, 120000);
    }
    
    // Animate community stats
    function animateStats() {
        const stats = [
            { id: 'active-supporters', target: 247 },
            { id: 'support-sessions', target: 1832 },
            { id: 'women-helped', target: 5649 },
            { id: 'success-stories', target: 892 }
        ];
        
        stats.forEach(stat => {
            const element = document.getElementById(stat.id);
            if (element) {
                let current = 0;
                const increment = stat.target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= stat.target) {
                        element.textContent = stat.target.toLocaleString();
                        clearInterval(timer);
                    } else {
                        element.textContent = Math.floor(current).toLocaleString();
                    }
                }, 50);
            }
        });
    }
    
    // Start stats animation when page loads
    setTimeout(animateStats, 1000);

});