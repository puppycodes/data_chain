(function() {var implementors = {};
implementors["bincode"] = ["impl&lt;'a, R:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a>&gt; <a class='trait' href='serde/de/trait.Deserializer.html' title='serde::de::Deserializer'>Deserializer</a> for <a class='struct' href='bincode/serde/struct.Deserializer.html' title='bincode::serde::Deserializer'>Deserializer</a>&lt;'a, R&gt;",];
implementors["maidsafe_utilities"] = ["impl&lt;'a, R&gt; <a class='trait' href='serde/de/trait.Deserializer.html' title='serde::de::Deserializer'>Deserializer</a> for <a class='struct' href='bincode/serde/reader/struct.Deserializer.html' title='bincode::serde::reader::Deserializer'>Deserializer</a>&lt;'a, R&gt; <span class='where'>where R: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a></span>",];
implementors["serde"] = [];
implementors["serde_value"] = ["impl <a class='trait' href='serde/de/trait.Deserializer.html' title='serde::de::Deserializer'>Deserializer</a> for <a class='struct' href='serde_value/struct.Deserializer.html' title='serde_value::Deserializer'>Deserializer</a>","impl <a class='trait' href='serde/de/trait.Deserializer.html' title='serde::de::Deserializer'>Deserializer</a> for <a class='struct' href='serde_value/struct.ValueDeserializer.html' title='serde_value::ValueDeserializer'>ValueDeserializer</a>",];
implementors["toml"] = ["impl <a class='trait' href='serde/de/trait.Deserializer.html' title='serde::de::Deserializer'>Deserializer</a> for <a class='struct' href='toml/struct.Decoder.html' title='toml::Decoder'>Decoder</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
