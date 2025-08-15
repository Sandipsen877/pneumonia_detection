// detection.js - Core functionality for pneumonia detection

document.addEventListener('DOMContentLoaded', function() {
    // Initialize elements
    const fileInput = document.getElementById('fileInput');
    const scanButton = document.getElementById('scanButton');
    const clearButton = document.getElementById('clearButton');
    const patientName = document.getElementById('patient-name');
    const patientAge = document.getElementById('patient-age');
    const patientGender = document.getElementById('patient-gender');
    const exportButton = document.querySelector('.btn-export');
    const newScanButton = document.querySelector('.btn-newscan');
    
    // Validate patient information before scanning
    function validatePatientInfo() {
        return patientName.value.trim() !== '' && 
               patientAge.value.trim() !== '' && 
               patientGender.value !== '';
    }
    
    // Update scan button state based on file and patient info
    function updateScanButtonState() {
        const hasFile = fileInput.files.length > 0;
        const hasValidInfo = validatePatientInfo();
        scanButton.disabled = !(hasFile && hasValidInfo);
    }
    
    // Event listeners for patient info changes
    [patientName, patientAge, patientGender].forEach(element => {
        element.addEventListener('input', updateScanButtonState);
    });
    
    // Handle file selection
    fileInput.addEventListener('change', function() {
        updateScanButtonState();
    });
    
    // Export report functionality
    exportButton?.addEventListener('click', function() {
        // In a real implementation, this would generate a PDF report
        // For now, we'll just show an alert
        alert('Report export functionality would be implemented here. This would generate a PDF with the scan results and patient information.');
    });
    
    // New scan button - clear all fields
    newScanButton?.addEventListener('click', function() {
        fileInput.value = '';
        patientName.value = '';
        patientAge.value = '';
        patientGender.value = '';
        scanButton.disabled = true;
    });
    
    // Form submission prevention (since we're handling it via AJAX)
    document.querySelector('.upload-container').addEventListener('submit', function(e) {
        e.preventDefault();
    });
    
    // Initialize scan button state
    updateScanButtonState();
    
    // In a real implementation, this would connect to your backend API
    // For now, we're using the simulated analysis from detector_animations.js
});

// API Integration Functions (would be implemented in a real application)
async function analyzeXRay(imageFile, patientInfo) {
    // This function would send the image and patient data to your backend API
    // and return the analysis results
    
    // Example implementation:
    /*
    const formData = new FormData();
    formData.append('xray', imageFile);
    formData.append('patientName', patientInfo.name);
    formData.append('patientAge', patientInfo.age);
    formData.append('patientGender', patientInfo.gender);
    
    try {
        const response = await fetch('/api/analyze', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('Analysis failed');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error analyzing X-ray:', error);
        throw error;
    }
    */
    
    // For demo purposes, we're using the simulated version in detector_animations.js
    return Promise.reject("Real API integration not implemented");
}

// Utility function to format patient data
function getPatientData() {
    return {
        name: document.getElementById('patient-name').value.trim(),
        age: document.getElementById('patient-age').value.trim(),
        gender: document.getElementById('patient-gender').value
    };
}