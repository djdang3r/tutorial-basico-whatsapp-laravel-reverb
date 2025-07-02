// Bacic Typeahead
var stringMatcher = function(strs) {
  return function findMatches(word, wd) {
    var strmatches;
    strmatches = [];
    substrRegex = new RegExp(word, 'i');
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        strmatches.push(str);
      }
    });
    wd(strmatches);
  };
};
var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];
$('#basictype .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: stringMatcher(states)
});

// Bloodhoundtype Typeahead
var states = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: states
});

$('#bloodhoundtype .typeahead').typeahead({
  hint: true,
  highlight: false,
  minLength: 1   
},
{
  name: 'states',
  source: states
});

// Prefetchtype Typeahead
var countries = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
   queryTokenizer: Bloodhound.tokenizers.whitespace,
   prefetch: "../assets/vendor/typeahead/data/countries.json",
});

$('#prefetchtype .typeahead').typeahead(null,{
  name: 'states',
  source: states
});

// Remotetype Typeahead
var bestPictures = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '../assets/vendor/typeahead/data/post_1960.json',
});

$('#remotetype .typeahead').typeahead(null, {
  name: 'best-pictures',
  display: 'value',
  source: bestPictures
});

// Custom Templates

$('#customtype-templates .typeahead').typeahead(null, {
  name: 'best-pictures',
  display: 'value',
  source: bestPictures,
  templates: {
    empty: [
      '<div class="empty-message">',
        '<i class="ti ti-mood-sad"></i> sorry! Data is not available',
      '</div>',
    ].join('\n'),

  }
});

// multiple-datasets
var nbaTeams = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '../assets/vendor/typeahead/data/nba.json'
});

var nhlTeams = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '../assets/vendor/typeahead/data/nhl.json'
});

// multiple-datasets
$('#multiple-datasetstype .typeahead').typeahead(null,
{
  name: 'nba-teams',
  display: 'team',
  source: nbaTeams,
  templates: {
    header: '<h5 class="league-name">NBA Teams</h5>'
  }
},
{
  name: 'nhl-teams',
  display: 'team',
  source: nhlTeams,
  templates: {
    header: '<h5 class="league-name">NHL Teams</h5>'
  }
});

// scrollable-dropdown-menu
$('#scrollable-dropdown-menu .typeahead').typeahead(null, {
  name: 'countries',
  limit: 10,
  source: countries
});

// rtltype Typeahead

var arabicPhrases = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ]
});

$('#rtltype .typeahead').typeahead({
  hint: false
},
{
  name: 'arabic-phrases',
  source: arabicPhrases
});