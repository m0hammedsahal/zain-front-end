import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Ruler, Box, MapPin } from 'lucide-react';

const ProductUploadSection = () => {
  const [step, setStep] = useState(1); // Form step (1: Product Details, 2: Location Details, 3: Preview)
  const [product, setProduct] = useState({
    material: '',
    type: '',
    width: '',
    height: '',
    diameter: '',
    area: '',
    size: '',
    image: null,
  });
  const [location, setLocation] = useState({
    room: '',
    building: '',
    site: '',
  });

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Submit product and location details to backend
    console.log('Product:', product);
    console.log('Location:', location);
    alert('Product details submitted successfully!');
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Upload Your Interior Product
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Add details about your product to showcase it in our interior design platform.
          </p>
        </motion.div>

        <div className="bg-black rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
          {/* Step Indicator */}
          <div className="flex justify-center space-x-4 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step === s ? 'bg-amber-400 text-black' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {s}
              </div>
            ))}
          </div>

          {/* Product Details Step */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <Box className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-semibold text-gray-900">Product Details</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Material</label>
                  <select
                    value={product.material}
                    onChange={(e) => setProduct({ ...product, material: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-400"
                  >
                    <option value="">Select Material</option>
                    <option value="wood">Wood</option>
                    <option value="metal">Metal</option>
                    <option value="glass">Glass</option>
                    <option value="plastic">Plastic</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select
                    value={product.type}
                    onChange={(e) => setProduct({ ...product, type: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-400"
                  >
                    <option value="">Select Type</option>
                    <option value="furniture">Furniture</option>
                    <option value="lighting">Lighting</option>
                    <option value="decor">Decor</option>
                    <option value="appliances">Appliances</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Width (cm)</label>
                    <input
                      type="number"
                      value={product.width}
                      onChange={(e) => setProduct({ ...product, width: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-400"
                      placeholder="Enter width"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
                    <input
                      type="number"
                      value={product.height}
                      onChange={(e) => setProduct({ ...product, height: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-400"
                      placeholder="Enter height"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                  <input
                    type="file"
                    onChange={(e) => setProduct({ ...product, image: e.target.files?.[0] || null })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Location Details Step */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-semibold text-gray-900">Location Details</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Room</label>
                  <input
                    type="text"
                    value={location.room}
                    onChange={(e) => setLocation({ ...location, room: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-400"
                    placeholder="Enter room"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Building</label>
                  <input
                    type="text"
                    value={location.building}
                    onChange={(e) => setLocation({ ...location, building: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-400"
                    placeholder="Enter building"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Site</label>
                  <input
                    type="text"
                    value={location.site}
                    onChange={(e) => setLocation({ ...location, site: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-400"
                    placeholder="Enter site"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Preview Step */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <Upload className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-semibold text-gray-900">Preview</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Product Details</h4>
                  <p className="text-gray-600">Material: {product.material}</p>
                  <p className="text-gray-600">Type: {product.type}</p>
                  <p className="text-gray-600">Width: {product.width} cm</p>
                  <p className="text-gray-600">Height: {product.height} cm</p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900">Location Details</h4>
                  <p className="text-gray-600">Room: {location.room}</p>
                  <p className="text-gray-600">Building: {location.building}</p>
                  <p className="text-gray-600">Site: {location.site}</p>
                </div>

                {product.image && (
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Product Image</h4>
                    <img
                      src={URL.createObjectURL(product.image)}
                      alt="Product"
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={handlePreviousStep}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={handleNextStep}
                className="px-6 py-2 bg-amber-400 text-black rounded-lg hover:bg-amber-500 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductUploadSection;