let themeHelpers = {
  customExcerpt: function(excerpt, length, unit = 'words', ending = '…') {
      let output = excerpt;
      let glue = unit === 'words' ? ' ' : '';

      if (unit === 'words') {
          output = output.split(' ');
      } else if (unit === 'chars') {
          output = [...output];
      }

      if (length < output.length) {
          output = output.slice(0, length);
          output = output.join(glue) + ending;
      } else {
          output = output.join(glue);
      }

      return output;
  }
};

module.exports = themeHelpers;