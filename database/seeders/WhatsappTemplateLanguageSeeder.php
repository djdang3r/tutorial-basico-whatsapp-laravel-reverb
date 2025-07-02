<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WhatsappTemplateLanguageSeeder extends Seeder
{
    public function run()
    {
        $languages = [
            [
                'id' => 'af',
                'name' => 'Afrikaans',
                'language_code' => 'af',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ar',
                'name' => 'Arabic',
                'language_code' => 'ar',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ar_EG',
                'name' => 'Arabic (EGY)',
                'language_code' => 'ar',
                'country_code' => 'EG',
                'variant' => 'EGY',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ar_AE',
                'name' => 'Arabic (UAE)',
                'language_code' => 'ar',
                'country_code' => 'AE',
                'variant' => 'UAE',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ar_LB',
                'name' => 'Arabic (LBN)',
                'language_code' => 'ar',
                'country_code' => 'LB',
                'variant' => 'LBN',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ar_MA',
                'name' => 'Arabic (MAR)',
                'language_code' => 'ar',
                'country_code' => 'MA',
                'variant' => 'MAR',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ar_QA',
                'name' => 'Arabic (QAT)',
                'language_code' => 'ar',
                'country_code' => 'QA',
                'variant' => 'QAT',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'az',
                'name' => 'Azerbaijani',
                'language_code' => 'az',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'be_BY',
                'name' => 'Belarusian',
                'language_code' => 'be',
                'country_code' => 'BY',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'bn',
                'name' => 'Bengali',
                'language_code' => 'bn',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'bn_IN',
                'name' => 'Bengali (IND)',
                'language_code' => 'bn',
                'country_code' => 'IN',
                'variant' => 'IND',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'bg',
                'name' => 'Bulgarian',
                'language_code' => 'bg',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ca',
                'name' => 'Catalan',
                'language_code' => 'ca',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'cs',
                'name' => 'Czech',
                'language_code' => 'cs',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'da',
                'name' => 'Danish',
                'language_code' => 'da',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'de_AT',
                'name' => 'German (AUT)',
                'language_code' => 'de',
                'country_code' => 'AT',
                'variant' => 'AUT',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'de_CH',
                'name' => 'German (CHE)',
                'language_code' => 'de',
                'country_code' => 'CH',
                'variant' => 'CHE',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'hr',
                'name' => 'Croatian',
                'language_code' => 'hr',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'nl',
                'name' => 'Dutch',
                'language_code' => 'nl',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'en',
                'name' => 'English',
                'language_code' => 'en',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'en_AE',
                'name' => 'English (UAE)',
                'language_code' => 'en',
                'country_code' => 'AE',
                'variant' => 'UAE',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'en_AU',
                'name' => 'English (AUS)',
                'language_code' => 'en',
                'country_code' => 'AU',
                'variant' => 'AUS',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'en_CA',
                'name' => 'English (CAN)',
                'language_code' => 'en',
                'country_code' => 'CA',
                'variant' => 'CAN',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'en_GB',
                'name' => 'English (UK)',
                'language_code' => 'en',
                'country_code' => 'GB',
                'variant' => 'UK',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'en_GH',
                'name' => 'English (GHA)',
                'language_code' => 'en',
                'country_code' => 'GH',
                'variant' => 'GHA',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'en_IE',
                'name' => 'English (IRL)',
                'language_code' => 'en',
                'country_code' => 'IE',
                'variant' => 'IRL',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'en_IN',
                'name' => 'English (IND)',
                'language_code' => 'en',
                'country_code' => 'IN',
                'variant' => 'IND',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'en_JM',
                'name' => 'English (JAM)',
                'language_code' => 'en',
                'country_code' => 'JM',
                'variant' => 'JAM',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'en_MY',
                'name' => 'English (MYS)',
                'language_code' => 'en',
                'country_code' => 'MY',
                'variant' => 'MYS',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'en_NZ',
                'name' => 'English (NZL)',
                'language_code' => 'en',
                'country_code' => 'NZ',
                'variant' => 'NZL',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'en_QA',
                'name' => 'English (QAT)',
                'language_code' => 'en',
                'country_code' => 'QA',
                'variant' => 'QAT',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'en_SG',
                'name' => 'English (SGP)',
                'language_code' => 'en',
                'country_code' => 'SG',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'en_US',
                'name' => 'English (US)',
                'language_code' => 'en',
                'country_code' => 'US',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'en_UG',
                'name' => 'English (UGA)',
                'language_code' => 'en',
                'country_code' => 'UG',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'en_ZA',
                'name' => 'English (ZAF)',
                'language_code' => 'en',
                'country_code' => 'ZA',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'es',
                'name' => 'Spanish',
                'language_code' => 'es',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'es_AR',
                'name' => 'Spanish (ARG)',
                'language_code' => 'es',
                'country_code' => 'AR',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'es_CL',
                'name' => 'Spanish (CHL)',
                'language_code' => 'es',
                'country_code' => 'CL',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'es_CO',
                'name' => 'Spanish (COL)',
                'language_code' => 'es',
                'country_code' => 'CO',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'es_CR',
                'name' => 'Spanish (CRI)',
                'language_code' => 'es',
                'country_code' => 'CR',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'es_DO',
                'name' => 'Spanish (DOM)',
                'language_code' => 'es',
                'country_code' => 'DO',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'es_EC',
                'name' => 'Spanish (ECU)',
                'language_code' => 'es',
                'country_code' => 'EC',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'es_ES',
                'name' => 'Spanish (SPA)',
                'language_code' => 'es',
                'country_code' => 'ES',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'es_HN',
                'name' => 'Spanish (HND)',
                'language_code' => 'es',
                'country_code' => 'HN',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'es_MX',
                'name' => 'Spanish (MEX)',
                'language_code' => 'es',
                'country_code' => 'MX',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'es_PA',
                'name' => 'Spanish (PAN)',
                'language_code' => 'es',
                'country_code' => 'PA',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'es_PE',
                'name' => 'Spanish (PER)',
                'language_code' => 'es',
                'country_code' => 'PE',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'es_UY',
                'name' => 'Spanish (URY)',
                'language_code' => 'es',
                'country_code' => 'UY',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'et',
                'name' => 'Estonian',
                'language_code' => 'et',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'fil',
                'name' => 'Filipino',
                'language_code' => 'fil',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'fi',
                'name' => 'Finnish',
                'language_code' => 'fi',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'fr',
                'name' => 'French',
                'language_code' => 'fr',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'fr_BE',
                'name' => 'French (BEL)',
                'language_code' => 'fr',
                'country_code' => 'BE',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'fr_CA',
                'name' => 'French (CAN)',
                'language_code' => 'fr',
                'country_code' => 'CA',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'fr_CH',
                'name' => 'French (CHE)',
                'language_code' => 'fr',
                'country_code' => 'CH',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'fr_CI',
                'name' => 'French (CIV)',
                'language_code' => 'fr',
                'country_code' => 'CI',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'fr_MA',
                'name' => 'French (MAR)',
                'language_code' => 'fr',
                'country_code' => 'MA',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ka',
                'name' => 'Georgian',
                'language_code' => 'ka',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'de',
                'name' => 'German',
                'language_code' => 'de',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'el',
                'name' => 'Greek',
                'language_code' => 'el',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'gu',
                'name' => 'Gujarati',
                'language_code' => 'gu',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ha',
                'name' => 'Hausa',
                'language_code' => 'ha',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'he',
                'name' => 'Hebrew',
                'language_code' => 'he',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'hi',
                'name' => 'Hindi',
                'language_code' => 'hi',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'hu',
                'name' => 'Hungarian',
                'language_code' => 'hu',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'id',
                'name' => 'Indonesian',
                'language_code' => 'id',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ga',
                'name' => 'Irish',
                'language_code' => 'ga',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'it',
                'name' => 'Italian',
                'language_code' => 'it',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ja',
                'name' => 'Japanese',
                'language_code' => 'ja',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'kn',
                'name' => 'Kannada',
                'language_code' => 'kn',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'kk',
                'name' => 'Kazakh',
                'language_code' => 'kk',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ko',
                'name' => 'Korean',
                'language_code' => 'ko',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ky_KG',
                'name' => 'Kyrgyz (Kyrgyzstan)',
                'language_code' => 'ky',
                'country_code' => 'KG',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'lo',
                'name' => 'Lao',
                'language_code' => 'lo',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'lv',
                'name' => 'Latvian',
                'language_code' => 'lv',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'lt',
                'name' => 'Lithuanian',
                'language_code' => 'lt',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'mk',
                'name' => 'Macedonian',
                'language_code' => 'mk',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ml',
                'name' => 'Malayalam',
                'language_code' => 'ml',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ms',
                'name' => 'Malay',
                'language_code' => 'ms',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'mr',
                'name' => 'Marathi',
                'language_code' => 'mr',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'nb',
                'name' => 'Norwegian',
                'language_code' => 'nb',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'nl_BE',
                'name' => 'Dutch (BEL)',
                'language_code' => 'nl',
                'country_code' => 'BE',
                'variant' => 'BEL',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'fa',
                'name' => 'Persian',
                'language_code' => 'fa',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'pl',
                'name' => 'Polish',
                'language_code' => 'pl',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'prs_AF',
                'name' => 'Dari',
                'language_code' => 'prs',
                'country_code' => 'AF',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ps_AF',
                'name' => 'Pashto',
                'language_code' => 'ps',
                'country_code' => 'AF',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'pt_BR',
                'name' => 'Portuguese (BR)',
                'language_code' => 'pt',
                'country_code' => 'BR',
                'variant' => 'BR',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'pt_PT',
                'name' => 'Portuguese (POR)',
                'language_code' => 'pt',
                'country_code' => 'PT',
                'variant' => 'POR',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'pa',
                'name' => 'Punjabi',
                'language_code' => 'pa',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ro',
                'name' => 'Romanian',
                'language_code' => 'ro',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ru',
                'name' => 'Russian',
                'language_code' => 'ru',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'rw_RW',
                'name' => 'Kinyarwanda',
                'language_code' => 'rw',
                'country_code' => 'RW',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'si_LK',
                'name' => 'Sinhala',
                'language_code' => 'si',
                'country_code' => 'LK',
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'sr',
                'name' => 'Serbian',
                'language_code' => 'sr',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'sk',
                'name' => 'Slovak',
                'language_code' => 'sk',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'sl',
                'name' => 'Slovenian',
                'language_code' => 'sl',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'sq',
                'name' => 'Albanian',
                'language_code' => 'sq',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'sv',
                'name' => 'Swedish',
                'language_code' => 'sv',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'sw',
                'name' => 'Swahili',
                'language_code' => 'sw',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ta',
                'name' => 'Tamil',
                'language_code' => 'ta',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'te',
                'name' => 'Telugu',
                'language_code' => 'te',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'th',
                'name' => 'Thai',
                'language_code' => 'th',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'tr',
                'name' => 'Turkish',
                'language_code' => 'tr',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'uk',
                'name' => 'Ukrainian',
                'language_code' => 'uk',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'ur',
                'name' => 'Urdu',
                'language_code' => 'ur',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'uz',
                'name' => 'Uzbek',
                'language_code' => 'uz',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'vi',
                'name' => 'Vietnamese',
                'language_code' => 'vi',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'zu',
                'name' => 'Zulu',
                'language_code' => 'zu',
                'country_code' => null,
                'variant' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'zh_CN',
                'name' => 'Chinese',
                'language_code' => 'zh',
                'country_code' => 'CN',
                'variant' => 'CHN',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'zh_HK',
                'name' => 'Chinese',
                'language_code' => 'zh',
                'country_code' => 'HK',
                'variant' => 'HKG',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 'zh_TW',
                'name' => 'Chinese',
                'language_code' => 'zh',
                'country_code' => 'TW',
                'variant' => 'TAI',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ];

        foreach ($languages as $language) {
            DB::table('whatsapp_template_languages')->updateOrInsert(
                ['id' => $language['id']],
                array_merge($language, [
                    'created_at' => now(),
                    'updated_at' => now(),
                ])
            );
        }
    }
}